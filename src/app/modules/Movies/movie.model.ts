import { model, Schema } from "mongoose";
import { IMovie, IReview } from "./movie.interface";

const reviewSchema = new Schema<IReview>({
  comment: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const movieSchema = new Schema<IMovie>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
  },
  viewCount: {
    type: Number,
    required: true,
  },
  reviews: [reviewSchema],
});

const Movie = model<IMovie>("Movie", movieSchema);

export default Movie;
