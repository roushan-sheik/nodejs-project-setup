/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable prefer-const */
import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import { USER_ROLE, USER_STATUS } from "./user.constant";
import bcryptjs from "bcryptjs";
import config from "../../../config";

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
    default: USER_STATUS.ACTIVE,
  },
  passwordChangedAt: {
    type: Date,
  },
});

// password hash method
userSchema.pre("save", async function (next) {
  let user = this;
  user.password = await bcryptjs.hash(
    user.password,
    Number(config.BCRYPT_SALT)
  );
  next();
});

// empty the user pass
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

const User = model<TUser>("User", userSchema);

export default User;
