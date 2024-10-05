import Movie from "../Movies/movie.model";
import { IReview } from "./review.interface";
import Review from "./review.model";

// add Review
const addReview = async (
  slug: string,
  reviewData: Partial<IReview>
): Promise<IReview> => {
  // find the move by slug and check exists
  const foundMovie = await Movie.findOne({ slug });

  if (!foundMovie) {
    throw new Error("Movie not found");
  }
  //   create review
  const review = await Review.create({
    movie: foundMovie._id,
    ...reviewData,
  });
  //   find out the total review size
  const reviewsCount = await Review.countDocuments({ movie: foundMovie._id });

  // increase the
  await Movie.findOneAndUpdate({ slug }, { totalRating: reviewsCount });
  return review;
};

// get all Review
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
