/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ErrorRequestHandler } from "express";
import CustomError from "../utils/CustomError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  // const customGlobalError = {};

  if (err instanceof CustomError) {
    res.status(err.statusCode).json(err.toResponseFormat());
  }
  res
    .status(err.status)
    .json({ message: err.message || "Internal Server Error!!" });
};
export default globalErrorHandler;
