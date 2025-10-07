import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", (req, res) => {
  // Handle login logic here
  res.send("Login endpoint");
});

authRouter.post("/register", (req, res) => {
  // Handle registration logic here
  res.send("Register endpoint");
});

export default authRouter;
