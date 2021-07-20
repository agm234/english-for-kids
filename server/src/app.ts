import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';
import categories from './category/router';
import cards from './cards/router';
import admins from './admin/router';

const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 80;
async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://agm:5123387@cluster0.hxszv.mongodb.net/english-for-kids',
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      },
    );
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use('/api/admin', admins);
    app.use('/api/categories', categories);
    app.use('/api/cards', cards);
    app.listen(PORT, async () => {
      console.log('server started on port 3000');
    });
  } catch (e) {
    console.log(e);
  }
}

start();
