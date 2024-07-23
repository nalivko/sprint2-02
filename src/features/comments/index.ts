import { Router } from "express";
import { authMiddleware } from "../auth/middlewares/authMiddleware";
import { deleteCommentController } from "./controllers/deleteCommentController";
import { getCommentController } from "./controllers/getCommentController";
import { updateCommentController } from "./controllers/updateCommentController";

export const commentsRouter = Router({})

commentsRouter.get('/:id', getCommentController)
commentsRouter.put('/:commentId', authMiddleware, updateCommentController)
commentsRouter.delete('/:commentId', authMiddleware, deleteCommentController)