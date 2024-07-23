import { body, param } from "express-validator";
import { checkErrorsMiddleware } from "../../../global-middlewares/checkErrorsMiddleware";
import { postsRepository } from "../../posts/posts-db-repository";

export const contentValidator =
    body('content')
        .isString()
        .withMessage('content must be a string')
        .trim().isLength({ min: 20, max: 300 })
        .withMessage('The content field length must be between 20 and 300 characters')

export const commentValidators = [
    contentValidator,
    checkErrorsMiddleware
]