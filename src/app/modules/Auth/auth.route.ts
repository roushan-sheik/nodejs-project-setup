import { Router } from "express";
import { AuthControllers } from "./auth.controller";
import { zodValidateRequest } from "../../middlewares";
import { AuthValidation } from "./auth.validation";

const router = Router();

router
  .route("/register")
  .post(
    zodValidateRequest(AuthValidation.registerUserValidationSchema),
    AuthControllers.registerUser
  );
router
  .route("/login")
  .put(
    zodValidateRequest(AuthValidation.loginValidationSchema),
    AuthControllers.loginUser
  );

export default router;
