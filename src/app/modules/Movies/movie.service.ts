import { IMovie } from "./movie.interface";
import Movie from "./movie.model";
// import { format } from "date-fns";
// import slugify from "slugify";

// create movie
const createMovie = async (payload: IMovie) => {
  // const date = format(payload.releaseDate, "dd-MM-yyyy");
  // const slug = slugify(`${payload.title}-${date}`, { lower: true, trim: true });

  return Movie.create(payload);
};
// get all movies
const getAllMovie = async () => {
  return Movie.find();
};
// get movie by id
const getMovieById = async (id: string) => {
  return Movie.findById(id);
};
// get movie by slug
const getMovieBySlug = async (slug: string) => {
  return Movie.findOne({ slug });
};

export const MovieService = {
  createMovie,
  getAllMovie,
  getMovieById,
  getMovieBySlug,
};
