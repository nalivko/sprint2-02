import { NextFunction, Request, Response } from "express"
import { jwtService } from "../../../application/jwtService"
import { usersRepository } from "../../users/usersRepository"
import { loginInputType } from "../controllers/types/loginTypes"

export const authMiddleware = async (req: Request<{}, {}, {}>, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        console.log('auth middleware 401');
        res.send(401)
        return
    }

    const token = req.headers.authorization.split(' ')[1]
    const userId = jwtService.getUserIdByToken(token)
    const user = await usersRepository.getUserById(userId!)

    if (!user) {
        res.send(401)
        return
    }

    req.user = {
        userId: userId!,
        login: user.login
    }

    next()
}