import { ObjectId } from 'mongoose';

export interface Category {
  _id: ObjectId
  name: string,
  image?: string,
  page?: string,
}
