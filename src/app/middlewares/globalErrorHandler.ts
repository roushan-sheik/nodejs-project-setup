/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { ErrorRequestHandler } from "express";
import { ICustomGlobalError } from "../interfaces/error.interface";
import { StatusCodes } from "http-status-codes";
import config from "../../config";
import handleValidationError from "../errors/handleValidationError";
import handleCastError from "../errors/handleCastError";
import { handleDuplicateError } from "../errors";

const globalErrorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  let customGlobalError: ICustomGlobalError = {
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
  if (err?.name === "ValidationError") {
    customGlobalError.errorSources = handleValidationError(err);
  } else if (err?.name === "CastError") {
    customGlobalError.errorSources = handleCastError(err);
  } else if (err?.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    if (simplifiedError) {
      customGlobalError = simplifiedError;
    }
  }

  // finally send the response
  res.status(customGlobalError.statusCode).json({
    ...customGlobalError,
    // err,
    stack: config.NODE_ENV === "development" ? err?.stack : null,
  });
};
export default globalErrorHandler;
