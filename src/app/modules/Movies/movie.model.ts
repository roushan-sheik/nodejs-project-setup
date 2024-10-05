import { model, Schema } from "mongoose";
import { IMovie, IReview } from "./movie.interface";
import { format } from "date-fns";
import slugify from "slugify";

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
  slug: {
    type: String,
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

// make slug befoure save the user in to DB
movieSchema.pre("save", function (next) {
  const date = format(this.releaseDate, "dd-MM-yyyy");
  const slug = slugify(`${this.title}-${date}`, { lower: true, trim: true });
  this.slug = slug;
  next();
});

const Movie = model<IMovie>("Movie", movieSchema);

export default Movie;
