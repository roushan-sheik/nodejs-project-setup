import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import { USER_ROLE, USER_STATUS } from "./user.constant";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: Object.keys(USER_ROLE),
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  status: {
    type: String,
    required: [true, "Status is required"],
    enum: Object.keys(USER_STATUS),
  },
  passwordChangedAt: {
    type: Date,
  },
});

const User = model<TUser>("User", userSchema);

export default User;
