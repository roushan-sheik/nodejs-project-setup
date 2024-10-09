import { Request, Response } from "express";
import { ReviewService } from "./review.service";
import { StatusCodes } from "http-status-codes";
import AsyncHandler from "../../utils/AsyncHandler";
import ApiResponse from "../../utils/ApiResponse";
import ApiError from "../../utils/ApiError";

// create review controller ====================>
const addReview = AsyncHandler(async (req: Request, res: Response) => {
  const reviewData = req.body;

  const { slug } = req.params;
  const review = await ReviewService.addReview(slug, reviewData);
  // throw new CustomError(
  //   StatusCodes.BAD_REQUEST,
  //   "User is unauthorized to create a review. "
  // );
  res
    .status(StatusCodes.CREATED)
    .json(
      new ApiResponse(
        StatusCodes.CREATED,
        review,
        "New review is added successfully"
      )
    );
});

// // get all movies controller ====================>
// const getAllReview = async (req: Request, res: Response) => {
//   try {
//     const result = await ReviewService.getAllReview();

//     res.status(StatusCodes.OK).json({
//       success: true,
//       message: "All Reviews",
//       data: result,
//     });
//   } catch (error) {
//     const err = error as Error;
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ message: err.message });
//   }
// };
// // get review by id controller ====================>
// const getReviewById = async (req: Request, res: Response) => {
//   try {
//     const { movieId } = req.params;
//     const result = await ReviewService.getReviewById(movieId);

//     res.status(StatusCodes.OK).json({
//       success: true,
//       message: "Found this review by Id",
//       data: result,
//     });
//   } catch (error) {
//     const err = error as Error;
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ message: err.message });
//   }
// };
// // update review controller ====================>
// const updateReview = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;

//     const result = await ReviewService.updateReview(id);

//     res.status(StatusCodes.OK).json({
//       success: true,
//       message: "Found this review by Slug",
//       data: result,
//     });
//   } catch (error) {
//     const err = error as Error;
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ message: err.message });
//   }
// };

// // update review controller ====================>
// const deleteReview = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;

//     const result = await ReviewService.updateReview(id);

//     res.status(StatusCodes.OK).json({
//       success: true,
//       message: "Found this review by Slug",
//       data: result,
//     });
//   } catch (error) {
//     const err = error as Error;
//     res
//       .status(StatusCodes.INTERNAL_SERVER_ERROR)
//       .json({ message: err.message });
//   }
// };

export const ReviewController = {
  addReview,
  //   getAllReview,
  //   getReviewById,
  //   updateReview,
  //   deleteReview,
};
