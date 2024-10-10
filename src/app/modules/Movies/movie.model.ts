import { model, Schema } from "mongoose";
import { IMovie, MovieModel } from "./movie.interface";
import { format } from "date-fns";
import slugify from "slugify";

const movieSchema = new Schema<IMovie, MovieModel>({
  title: {
    type: String,
    required: true,
    minlength: [6, "Min length should be 6 characters"],
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
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
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  totalRating: {
    type: Number,
    default: 0,
  },
});

// make slug befoure save the user in to DB ================>
// movieSchema.pre("save", function (next) {
//   const date = format(this.releaseDate, "dd-MM-yyyy");
//   const slug = slugify(`${this.title}-${date}`, { lower: true, trim: true });
//   this.slug = slug;
//   next();
// });

// custom instance method  =============================>
// movieSchema.method("createSlug", function (payload: IMovie) {
//   const date = format(payload.releaseDate, "dd-MM-yyyy");
//   const slug = slugify(`${payload.title}-${date}`, { lower: true, trim: true });
//   return slug;
// });

// custom static method  =============================>

movieSchema.static("createSlug", function myStaticMethod(payload: IMovie) {
  const date = format(payload.releaseDate, "dd-MM-yyyy");
  const slug = slugify(`${payload.title}-${date}`, { lower: true, trim: true });
  return slug;
});

const Movie = model<IMovie, MovieModel>("Movie", movieSchema);

export default Movie;
