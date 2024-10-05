import mongoose from "mongoose";

export interface IReview {
  movie: mongoose.Schema.Types.ObjectId;
  email: string;
  rating: number;
  comment: string;
}
