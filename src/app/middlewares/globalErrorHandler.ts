/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ErrorRequestHandler } from "express";
import { ICustomGlobalError } from "../interfaces/error.interface";
import { StatusCodes } from "http-status-codes";
import config from "../../config";
import handleValidationError from "../errors/handleValidationError";

const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  const customGlobalError: ICustomGlobalError = {
    success: err.success || false,
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Internal Server Error!!",
    errorSources: [
      {
        path: "",
        message: err.message || "Something went wrong!",
      },
    ],
  };
  // ValidationError
  if (err.name === "ValidationError") {
    const simplified = handleValidationError(err);
    customGlobalError.errorSources = simplified;
  }

  // finally send the response
  res.status(customGlobalError.statusCode).json({
    ...customGlobalError,
    // err,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });
};
export default globalErrorHandler;
