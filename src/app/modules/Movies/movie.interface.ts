/* eslint-disable no-unused-vars */
import { Model } from "mongoose";

export interface IMovie {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  slug: string;
  isDeleted?: boolean;
  viewCount: number;
  totalRating: number;
}

// custom instance method ==============================>

// Put all user instance methods in this interface:
// export interface IMovieMethods {
//   createSlug(payload: IMovie): string;
// }

// Create a new Model type that knows about IUserMethods...
// export type TMovieModel = Model<IMovie, Record<string, unknown>, IMovieMethods>;

// custom static method ==============================>

export interface MovieModel extends Model<IMovie> {
  createSlug(payload: IMovie): string;
}
