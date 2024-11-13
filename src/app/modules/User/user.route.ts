import { Router } from "express";
import { UserControllers } from "./user.controller";
import { UserValidation } from "./user.validation";
import { zodValidateRequest } from "../../middlewares";

const router = Router();

router
  .route("/create-admin")
  .post(
    zodValidateRequest(UserValidation.createAdminValidationSchema),
    UserControllers.createAdmin
  );
router
  .route("/userId")
  .put(
    zodValidateRequest(UserValidation.updateUserValidationSchema),
    UserControllers.updateUser
  );

export default router;
