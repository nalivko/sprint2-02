import { Request, Response } from "express";
import { commentsRepository } from "../repositories/commentsRepository";
import { commentService } from "../services/commentsService";

export const deleteCommentController = async (req: Request, res: Response) => {
    const isDeleted = await commentService.deleteComment(req.params.commmentId, req.user.userId)

    if (isDeleted) {
        res.send(204)
    } else {
        res.send(404)
    }
}