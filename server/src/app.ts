import express, { Request, Response } from "express";
import cors from "cors";
import authRouter from "./services/auth/routes";
import config from "./config";
import postsRouter from "./services/posts/routes";

const app = express();

const API_PREFIX = config.apiPrefix;

// Middleware
app.use(express.json());
app.use(cors());

// Health Check Route
app.get("/", (_req, res) => {
  res.status(200).json({ message: "🚀 Server is running!" });
});

// Importing routes
app.use(`${API_PREFIX}/auth`, authRouter);
app.use(`${API_PREFIX}/posts`, postsRouter);

app.use((err: Error, _req: Request, res: Response) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

export default app;
