import { Router } from "express";
import { loginController } from "./controllers/loginController";
import { authController } from "./controllers/authController";
import { authValidators } from "./middlewares/authValidators";
import { authMiddleware } from "./middlewares/authMiddleware";

export const authRouter = Router({})

authRouter.post('/login', ...authValidators, loginController)
authRouter.get('/me', authMiddleware, authController)