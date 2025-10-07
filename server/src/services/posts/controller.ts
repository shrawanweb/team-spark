/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";
import { Post } from "./model";

// Define UserRequest type to include 'body' property

// create post controller
export const createPost = async (req: any, res: Response) => {
  const { title, content } = req.body;
  const user = req.user;
  if (!user || !user.id) {
    res.status(400).json({ message: "User information is missing" });
    return;
  }
  if (!title || !content) {
    res.status(400).json({ message: "Title and content are required" });
    return;
  }
  // Logic to create a post
  const post = await Post.create({
    title,
    content,
    user: user.id,
  });

  res.status(201).json({ message: "Post created successfully", post });
  return;
};

// // get all posts controller
// // get post by id controller
// // update post controller
// // delete post controller
// // report post controller
