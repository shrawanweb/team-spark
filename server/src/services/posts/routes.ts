// create post----upload----verify----then---create

// get all posts
// get post by id
// update post
// delete post
// report post

import { Router } from "express";
import { createPost } from "./controller";

const postsRouter = Router();

postsRouter.post("/", createPost);

export default postsRouter;
