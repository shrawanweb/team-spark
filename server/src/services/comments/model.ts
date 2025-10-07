import { model, Schema } from "mongoose";

interface CommentDocument {
    post: Schema.Types.ObjectId;
    user: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const commentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
},
{ timestamps: true }
)

const Comment = model<CommentDocument>("Comment", commentSchema);
export { Comment, CommentDocument };