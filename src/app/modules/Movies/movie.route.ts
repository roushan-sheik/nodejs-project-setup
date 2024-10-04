import express from "express";
import { createMovie } from "./movie.controller";

const router = express.Router();

router.route("/").post(createMovie);

export const MovieRoute = router;
