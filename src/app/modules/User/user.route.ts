import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();

router.route("/create-admin").post(UserController.createAdmin);

export default router;
