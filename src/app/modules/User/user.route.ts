import { Router } from "express";
import { UserControllers } from "./user.controller";
import { UserValidation } from "./user.validation";
import { zodValidateRequest } from "../../middlewares";
import { auth } from "./../../middlewares/auth";
import { USER_ROLE } from "./user.constant";

const router = Router();

router
  .route("/create-admin")
  .post(
    zodValidateRequest(UserValidation.createAdminValidationSchema),
    auth(USER_ROLE.ADMIN, USER_ROLE.SUPER_ADMIN),
    UserControllers.createAdmin
  );
router
  .route("/userId")
  .put(
    zodValidateRequest(UserValidation.updateUserValidationSchema),
    UserControllers.updateUser
  );

export default router;
