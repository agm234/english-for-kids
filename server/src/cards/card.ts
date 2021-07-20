import { ObjectId } from 'mongoose';

export interface Card {
  _id?: ObjectId;
  word: string;
  translation: string;
  image?: string;
  audioSrc?: string;
  category: string;
  clicks: number;
  correct: number;
  wrong: number;
  errorspers: number;
  soundname: string;
}
export interface Cardimg {
  secure_url: string;
}
export interface Files {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}
