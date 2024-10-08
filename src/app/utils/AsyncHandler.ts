/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const AsyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      const err = error as Error;
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: err.message, catchFrom: "AsyncHandler" });
    });
  };
};

export default AsyncHandler;
