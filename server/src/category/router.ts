import { Router } from 'express';
import { Category } from './categorys';
import { CategoryModel } from './schema';
import { StatusCodes } from '../common';

const router = Router();

router.get('/', async (req, res) => {
  await CategoryModel.find({}, (err: Error, data: Category) => res.json(data));
});

router.get('/:name', async (req, res) => {
  try {
    await CategoryModel.find({ name: req.params.name }, (err: Error, data: Category) => {
      if (!data) return res.sendStatus(StatusCodes.NotFound);
      return res.json(data);
    });
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});
router.put('/', async (req, res) => {
  const data = req.body as Category;
  await CategoryModel.findOneAndUpdate({ _id: data._id }, data, { new: true }, (err: Error, data1: Category) => {
    if (err) return res.status(StatusCodes.BadRequest).send(err);
    return res.json(data1);
  });
});
router.delete('/:name', async (req, res) => {
  await CategoryModel.findOneAndDelete({ name: req.params.name }, (err: Error) => {
    if (err) return res.status(StatusCodes.NotFound).send(err);
    return res.sendStatus(StatusCodes.Ok);
  });
});
router.post('/', async (req, res) => {
  const data = req.body as Category;
  if (!data.name) return res.sendStatus(StatusCodes.BadRequest);
  try {
    const newCategory = await new CategoryModel(data);
    newCategory.save();
    return res.json(newCategory);
  } catch (e) {
    return res.status(StatusCodes.BadRequest).send(e);
  }
});

export default router;
