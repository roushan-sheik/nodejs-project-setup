import { StatusCodes } from "http-status-codes";
import { TUser } from "../User/user.interface";
import User from "../User/user.model";
import ApiError from "./../../utils/ApiError";
import { USER_ROLE } from "./../User/user.constant";

const registerUser = async (payload: TUser): Promise<TUser> => {
  // check user already exists
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new ApiError(StatusCodes.CONFLICT, "User already exists.");
  }
  // Make user role  constant
  payload.role = USER_ROLE.USER;
  //   hash the user password
  const newUser = await User.create(payload);
  return newUser;
};

export const AuthService = {
  registerUser,
};
