import { IMovie } from "./movie.interface";
import Movie from "./movie.model";

// create movie
const createMovie = async (payload: IMovie) => {
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

export const MovieService = {
  createMovie,
  getAllMovie,
  getMovieById,
};
