import express from "express";
import { registerController } from "../controller";
const router = express.Router();

// for register
router.post("/register", registerController.register);

export default router;
