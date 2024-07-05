import { Request, Response } from "express"
import { userQueryRepository } from "../usersQueryRepository"

export const getUsersController = async (req: Request, res: Response) => {
    const users = await userQueryRepository.getUsers(req.query as { [key: string]: string | undefined })

    return res.send(users)
}