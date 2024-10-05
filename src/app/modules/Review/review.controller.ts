import { Request, Response } from "express";
import { ReviewService } from "./review.service";
import { StatusCodes } from "http-status-codes";

// create review controller ====================>
const addReview = async (req: Request, res: Response) => {
  try {
    const reviewData = req.body;
    console.log(reviewData);
    const { slug } = req.params;
    const review = await ReviewService.addReview(slug, reviewData);

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Review is created Successfully.",
      data: review,
    });
  } catch (error) {
    const err = error as Error;
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: err.message });
  }
};

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
