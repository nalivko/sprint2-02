import { Router } from "express";
import { loginController } from "./controllers/loginController";
import { authValidators } from "./middlewares/authValidators";

export const authRouter = Router({})

authRouter.post('/login', ...authValidators, loginController)