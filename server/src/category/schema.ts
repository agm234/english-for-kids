const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String },
  image: { type: String },
  page: { type: String },
});

export const CategoryModel = mongoose.model('categories', categorySchema);
