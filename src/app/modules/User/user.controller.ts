// create admin
import { Request, Response } from "express";
import AsyncHandler from "./../../utils/AsyncHandler";
import { UserService } from "./user.service";
import ApiResponse from "./../../utils/ApiResponse";
import { StatusCodes } from "http-status-codes";

const createAdmin = AsyncHandler(async (req: Request, res: Response) => {
  const payload = req.body;
  const admin = await UserService.createAdminIntoDB(payload);
  res
    .status(201)
    .json(
      new ApiResponse(
        StatusCodes.CREATED,
        admin,
        "Admin is created Successfully."
      )
    );
});
// update user
const updateUser = AsyncHandler(async (req: Request, res: Response) => {
  const { userId } = req.params;
  const updatedUser = await UserService.updateUserIntoDB(userId);
  res
    .status(201)
    .json(
      new ApiResponse(
        StatusCodes.CREATED,
        updatedUser,
        "Admin is created Successfully."
      )
    );
});

export const UserControllers = {
  createAdmin,
  updateUser,
};
