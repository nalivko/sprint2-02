import { Request, Response } from "express";
import { commentService } from "../services/commentsService";
import { CommentViewModel } from "../types/commentsTypes";

export const getCommentController = async (req: Request<{id: string}>, res: Response<CommentViewModel | null>) => {
    const comment = await commentService.getCommentById(req.params.id)

    if (comment) {
        res.send(comment)
    } else {
        res.sendStatus(404)
    }
}