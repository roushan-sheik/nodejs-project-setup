import { IMovie } from "./movie.interface";
import Movie from "./movie.model";

const createMovie = async (payload: IMovie) => {
  return Movie.create(payload);
};

export const MovieService = {
  createMovie,
};
