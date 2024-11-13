/* eslint-disable @typescript-eslint/no-explicit-any */
import { StatusCodes } from "http-status-codes";
import { TUser } from "../User/user.interface";
import User from "../User/user.model";
import ApiError from "./../../utils/ApiError";
import { USER_ROLE } from "./../User/user.constant";
import { TLoginUser } from "./auth.interface";
import { isPasswordMatched } from "./auth.utils";
import jwt from "jsonwebtoken";
import config from "../../../config";

// Register User
const registerUser = async (payload: TUser): Promise<TUser> => {
  // check user already exists
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new ApiError(StatusCodes.CONFLICT, "User already exists.");
  }
  // Make user role  constant
  payload.role = USER_ROLE.USER;
  //   hash the user password by pre hook
  //   create new user
  const newUser = await User.create(payload);
  return newUser;
};
// LogIn User
const LoginUser = async (payload: TLoginUser): Promise<any> => {
  // check user
  const user = await User.findOne({ email: payload.email }).select("+password");
  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, "User not found!");
  }
  //   check status
  if (user.status === "BLOCKED") {
    throw new ApiError(StatusCodes.FORBIDDEN, "User is blocked");
  }
  //   check password
  const passwordMatch = await isPasswordMatched(
    payload.password,
    user.password
  );
  if (!passwordMatch) {
    throw new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized to access");
  }
  //   generate a access token
  const jwtPayload = {
    name: user.name,
    email: user.email,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.JWT_ACCESS_SECRET as string, {
    expiresIn: config.JWT_ACCESS_EXPIRY,
  });
  const refreshToken = jwt.sign(
    jwtPayload,
    config.JWT_REFRESH_SECRET as string,
    {
      expiresIn: config.JWT_REFRESH_EXPIRY,
    }
  );
  return {
    accessToken,
    refreshToken,
  };
};

export const AuthService = {
  registerUser,
  LoginUser,
};
