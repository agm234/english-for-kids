const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  word: { type: String },
  translation: { type: String },
  image: { type: String },
  audioSrc: { type: String },
  category: { type: String },
  clicks: { type: Number },
  correct: { type: Number },
  wrong: { type: Number },
  errorspers: { type: Number },
  soundname: { type: String },
});

export const CardModel = mongoose.model('cards', cardSchema);
