import { Request, Response } from "express"
import { authService } from "../services/authService"

export const loginController = async (req: Request, res: Response) => {
    // res.send(req.body.login + ' ' + req.body.password)
    const user = await authService.login(req.body.loginOrEmail, req.body.password)
    // res.send(user)

    if (!user) {
        res.sendStatus(401)
        return
    }

    res.sendStatus(204)
    return
}