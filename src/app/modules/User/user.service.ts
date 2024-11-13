import { TUser } from "./user.interface";
import User from "./user.model";

const createAdminIntoDB = async (payload: TUser) => {
  const admin = await User.create(payload);
  return admin;
};
const updateUserIntoDB = async (userId: string) => {
  const updatedUser = await User.create(userId);
  return updatedUser;
};

export const UserService = {
  createAdminIntoDB,
  updateUserIntoDB,
};
