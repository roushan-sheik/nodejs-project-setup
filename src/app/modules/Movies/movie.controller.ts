import { Request, Response } from "express";
import { MovieService } from "./movie.service";
import { StatusCodes } from "http-status-codes";

// create movie controller
const createMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const movie = await MovieService.createMovie(movieData);

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "Movie is created Successfully.",
    data: movie,
  });
};
// get all movies controller
const getAllMovie = async (req: Request, res: Response) => {
  const result = await MovieService.getAllMovie();

  res.status(StatusCodes.OK).json({
    success: true,
    message: "All Movies",
    data: result,
  });
};
// create movie controller
const getMovieById = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const result = await MovieService.getMovieById(movieId);

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Found this movie by Id",
    data: result,
  });
};

export const MovieController = { createMovie, getAllMovie, getMovieById };
