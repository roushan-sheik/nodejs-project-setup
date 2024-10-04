import express from "express";
import { MovieController } from "./movie.controller";

const router = express.Router();

router.route("/").post(MovieController.createMovie);
router.route("/").get(MovieController.getAllMovies);

export const MovieRoute = router;
