import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Admin } from './admin';

const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const genrateAccesToken = (username: string, password: string) => {
  const payload = {
    username,
    password,
  };
  return jwt.sign(payload, secret);
};

const router = Router();
router.post('/', async (request: Request, response: Response) => {
  const data = request.body as Admin;
  if (data.name && data.password) {
    const db = await mongoose.connection;
    const cards = await db.collection('users');
    cards.find(data).toArray((err, user) => {
      if (user.length > 0) {
        const token = genrateAccesToken(data.name, data.password);
        return response.json({ token });
      }
      return response.status(400).json('Incorrect Username or Password!');
    });
  } else {
    return response.status(400).json('Please enter Username and Password!');
  }
});

export default router;
