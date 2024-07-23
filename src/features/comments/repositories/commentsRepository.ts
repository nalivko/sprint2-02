import { ObjectId } from "mongodb";
import { CommentDbType } from "../../../db/comment-db-type";
import { commentsCollection } from "../../../db/mongodb";
import { CommentInputModel, CommentViewModel } from "../types/commentsTypes";

export const commentsRepository = {
    async createComment(newComment: CommentDbType): Promise<CommentViewModel> {
        console.log('com ', newComment);

        await commentsCollection.insertOne(newComment)

        return this.mapComment(newComment)
    },

    async updateComment(id: string, newData: CommentInputModel): Promise<boolean> {
        let result = await commentsCollection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    content: newData.content
                }
            }
        )

        return result.matchedCount === 1
    },

    async deleteComment(id: string): Promise<boolean> {
        let result = await commentsCollection.deleteOne({_id: new ObjectId(id)})

        return result.deletedCount === 1
    },

    mapComment(comment: CommentDbType) {
        return {
            id: comment.postId.toString(),
            content: comment.content,
            commentatorInfo: comment.commentatorInfo,
            createdAt: comment.createdAt,
        }
    }
}