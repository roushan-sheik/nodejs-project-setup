import AsyncHandler from "./../utils/AsyncHandler";
import { USER_ROLE, USER_STATUS } from "./../modules/User/user.constant";
import { NextFunction, Response, Request } from "express";
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import User from "../modules/User/user.model";

export const auth = (...permissionRoles: (keyof typeof USER_ROLE)[]) => {
  return AsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      // Extract the token from req.headers.authorization
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(
          StatusCodes.UNAUTHORIZED,
          "You are unauthorized to access this route."
        );
      }
      // verify token
      const verifyToken = jwt.verify(token, config.JWT_ACCESS_SECRET as string);
      const { role, email } = verifyToken as JwtPayload;
      // find the user  by email
      const user = await User.findOne({ email });
      if (!user) {
        throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
      }
      // check user status
      if (user.status === USER_STATUS.BLOCKED) {
        throw new ApiError(StatusCodes.UNAUTHORIZED, "User is blocked");
      }
      // check user role
      if (role !== user.role) {
        throw new ApiError(
          StatusCodes.UNAUTHORIZED,
          "You are unauthorized to access this route."
        );
      }
      // finally check user has access to this route
      if (!permissionRoles.includes(role)) {
        throw new ApiError(
          StatusCodes.UNAUTHORIZED,
          "You are unauthorized to access this route."
        );
      }
      // finally let him go call the next function
      next();
    }
  );
};
