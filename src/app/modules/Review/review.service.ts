/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose";
import { ClientSession } from "mongoose";
import Movie from "../Movies/movie.model";
import { IReview } from "./review.interface";
import Review from "./review.model";

// add Review
const addReview = async (
  slug: string,
  reviewData: Partial<IReview>
): Promise<IReview | any> => {
  const session: ClientSession = await mongoose.startSession();

  try {
    session.startTransaction();

    // find the move by slug and check exists
    const foundMovie = await Movie.findOne({ slug });

    if (!foundMovie) {
      throw new Error("Movie not found");
    }
    const data = {
      movie: foundMovie._id,
      ...reviewData,
    };
    //   create review
    const review = await Review.create([data], { session });
    // throw error for testing
    // throw new Error("App is CRUSHED !!!!!!!!!");

    //   find out the total review size
    const reviewsCount = await Review.countDocuments({
      movie: foundMovie._id,
    });

    // increase the
    await Movie.findOneAndUpdate(
      { slug },
      { totalRating: reviewsCount },
      { session }
    );
    // Commit the changes
    await session.commitTransaction();
    return review[0];
  } catch (error) {
    // Rollback any changes made in the database
    await session.abortTransaction();

    const err = error as Error;
    // throw the error again
    throw new Error(err.message);
  } finally {
    // Ending the session
    session.endSession();
  }
};

// get all Review======================>
const getAllReview = async (payload: IReview) => {
  return Review.create(payload);
};

// get Review By Id
const getReviewById = async (payload: IReview) => {
  return Review.create(payload);
};

// get Review By Id
const updateReview = async (payload: IReview) => {
  return Review.create(payload);
};

// get Review By Id
const deleteReview = async (payload: IReview) => {
  return Review.create(payload);
};

export const ReviewService = {
  addReview,
  getAllReview,
  getReviewById,
  updateReview,
  deleteReview,
};
