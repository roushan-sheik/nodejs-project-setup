import {ObjectId} from "mongoose";

export interface IReview {
  movie: ObjectId;
  email: string;
  rating: number;
  comment: string;
}
