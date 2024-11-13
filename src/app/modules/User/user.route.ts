import { Router } from "express";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";
import { zodValidateRequest } from "../../middlewares";

const router = Router();

router
  .route("/create-admin")
  .post(
    zodValidateRequest(UserValidation.createAdminValidationSchema),
    UserController.createAdmin
  );

export default router;
