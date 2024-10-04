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
// create movie controller
const getAllMovies = async (req: Request, res: Response) => {
  const result = await MovieService.getAllMovie();

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "Movie is created Successfully.",
    data: result,
  });
};

export const MovieController = { createMovie, getAllMovies };
