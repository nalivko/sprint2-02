import { Request, Response } from "express";
import { commentsRepository } from "../repositories/commentsRepository";
import { commentService } from "../services/commentsService";

export const deleteCommentController = async (req: Request, res: Response) => {
    console.log('contr', req.params.commentId);
    
    const result = await commentService.deleteComment(req.params.commentId, req.user.userId)

    res.send(result.status)
}