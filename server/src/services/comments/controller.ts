/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";
import { Comment } from "./model";

// create comment
export const createComment = async (req: any, res: Response) => {
  const { postId, content } = req.body;
  const user = req.user;
  if (!user || !user.id) {
    res.status(400).json({ message: "User information is missing" });
    return;
  }
  if (!postId || !content) {
    res.status(400).json({ message: "Post ID and content are required" });
    return;
  }
  const comment = await Comment.create({
    post: postId,
    user: user.id,
    content,
  });
  res.status(201).json({ message: "Comment created successfully", comment });
};
