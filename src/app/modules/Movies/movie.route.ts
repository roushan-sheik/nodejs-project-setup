import express from "express";
import { MovieController } from "./movie.controller";
import { ReviewController } from "../Review/review.controller";
import { zodValidateRequest } from "../../middlewares/zodValidateRequest";
import { MovieValidation } from "./movie.validation";

const router = express.Router();

router
  .route("/")
  .post(
    zodValidateRequest(MovieValidation.createMovieSchema),
    MovieController.createMovie
  );
router.route("/").get(MovieController.getAllMovie);
router.route("/:movieId").get(MovieController.getMovieById);
router.route("/slug/:slug").get(MovieController.getMovieBySlug);
// review routes
router.route("/:slug/review").post(ReviewController.addReview);
// router.route("/movies/:slug/review").get(ReviewController.getAllReview);
// router.route("/movies/:slug/review").get(ReviewController.getReviewById);
// router.route("/movies/:slug/review").get(ReviewController.deleteReview);

export const MovieRoute = router;
