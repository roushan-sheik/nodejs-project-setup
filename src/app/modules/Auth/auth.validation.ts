import { z } from "zod";
import { USER_ROLE, USER_STATUS } from "../User/user.constant";

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password should be min 6 characters"),
  }),
});

const registerUserValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    role: z.nativeEnum(USER_ROLE).default(USER_ROLE.USER),
    email: z.string().email(),
    password: z.string(),
    status: z.nativeEnum(USER_STATUS).default(USER_STATUS.ACTIVE),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
  registerUserValidationSchema,
};
