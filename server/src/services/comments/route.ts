import { Router } from "express";
import { createComment } from "./controller";

const commentsRouter = Router();

commentsRouter.post("/:postId", createComment);

export default commentsRouter;
