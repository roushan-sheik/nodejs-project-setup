import { Request, Response } from "express";
import { MovieService } from "./movie.service";
import { StatusCodes } from "http-status-codes";
import AsyncHandler from "../../utils/AsyncHandler";
import ApiResponse from "../../utils/ApiResponse";

// create movie controller ====================>

const createMovie = AsyncHandler(async (req: Request, res: Response) => {
  const movieData = req.body;

  const movie = await MovieService.createMovie(movieData);
  res
    .status(StatusCodes.CREATED)
    .json(new ApiResponse(StatusCodes.CREATED, movie));
});

// get all movies controller ====================>
const getAllMovie = async (req: Request, res: Response) => {
  try {
    const payload = req.query;
    const result = await MovieService.getAllMovie(payload);

    res.status(StatusCodes.OK).json({
      success: true,
      message: "All Movies",
      data: result,
    });
  } catch (error) {
    const err = error as Error;
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};
// get movie by id controller ====================>
const getMovieById = AsyncHandler(async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const result = await MovieService.getMovieById(movieId);
  res
    .status(StatusCodes.OK)
    .json(
      new ApiResponse(StatusCodes.OK, result, "Found the movie by given ID")
    );
});
// get movie by slug controller ====================>
const getMovieBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const result = await MovieService.getMovieBySlug(slug);

    res.status(StatusCodes.OK).json({
      success: true,
      message: "Found this movie by Slug",
      data: result,
    });
  } catch (error) {
    const err = error as Error;
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

export const MovieController = {
  createMovie,
  getAllMovie,
  getMovieById,
  getMovieBySlug,
};
