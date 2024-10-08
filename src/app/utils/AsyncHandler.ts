/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomError from "./CustomError";

const AsyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      if (error instanceof CustomError) {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json(error.toResponseFormat());
      }
    });
  };
};

export default AsyncHandler;
