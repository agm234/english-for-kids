import { Router } from 'express';
import { StatusCodes } from '../common';
import { Card, Cardimg, Files } from './card';
import { CardModel } from './schema';

require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const path = require('path');
const fs = require('fs/promises');

const router = Router();

const loader = multer({ dest: path.join(__dirname, 'tmp') });

router.post('/', loader.array('avatar', 2), async (req, res) => {
  const arr = req.files as Files[];
  const obj = {} as { audio: string, img: string };
  const word: Card = {
    word: req.body.word,
    translation: req.body.translation,
    category: req.body.category,
    soundname: arr[0].originalname,
    clicks: 0,
    correct: 0,
    wrong: 0,
    errorspers: 0,
  };
  try {
    word.audioSrc = (await cloudinary.uploader.upload(arr[0]?.path, {
      resource_type: 'video',
    }) as Cardimg).secure_url;
    word.image = (await cloudinary.uploader.upload(arr[1].path) as Cardimg).secure_url;
    res.send(obj);
    const newWord = await new CardModel(word);
    newWord.save();
  } catch (error) {
    res.send(error);
  }
  fs.unlink(arr[0]?.path);
  fs.unlink(arr[1]?.path);
});
router.put('/admin', loader.array('avatar', 2), async (req, res) => {
  const arr = req.files as Files[];
  const obj = {} as { audio: string, img: string };
  const word: Card = {
    word: req.body.word,
    translation: req.body.translation,
    category: req.body.category,
    soundname: arr[0].originalname,
    clicks: 0,
    correct: 0,
    wrong: 0,
    errorspers: 0,
  };
  try {
    word.audioSrc = (await cloudinary.uploader.upload(arr[0]?.path, {
      resource_type: 'video',
    }) as Cardimg).secure_url;
    word.image = (await cloudinary.uploader.upload(arr[1].path) as Cardimg).secure_url;
    res.send(obj);
    CardModel.findOneAndUpdate({ word: req.body.oldname }, word, { new: true }, (err: Error) => {
      if (err) return res.status(StatusCodes.BadRequest).send(err);
    });
  } catch (error) {
    res.send(error);
  }
  fs.unlink(arr[0]?.path);
  fs.unlink(arr[1]?.path);
});
router.get('/', async (req, res) => {
  CardModel.find({}, (err: Error, data: Card) => res.json(data));
});

router.get('/:name', async (req, res) => {
  try {
    CardModel.find({ word: req.params.name }, (err: Error, data: Card) => {
      if (!data) return res.sendStatus(StatusCodes.NotFound);
      return res.json(data);
    });
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});
router.put('/', async (req, res) => {
  const data = req.body as Card;
  CardModel.findOneAndUpdate({ word: data.word }, data, { new: true }, (err: Error, data1: Card) => {
    if (err) return res.status(StatusCodes.BadRequest).send(err);
    return res.json(data1);
  });
});
router.delete('/:name', async (req, res) => {
  CardModel.findOneAndDelete({ word: req.params.name }, (err: Error) => {
    if (err) return res.status(StatusCodes.NotFound).send(err);
    return res.sendStatus(StatusCodes.Ok);
  });
});
router.delete('/', async (req, res) => {
  const data = req.body as { categoryname: string };
  CardModel.deleteMany({ category: data.categoryname }, (err: Error) => {
    if (err) return res.status(StatusCodes.NotFound).send(err);
    return res.sendStatus(StatusCodes.Ok);
  });
});

export default router;
