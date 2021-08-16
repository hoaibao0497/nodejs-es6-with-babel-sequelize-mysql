import { Router } from "express";
const User = Router();
import UserController from "../controllers/user";

User.get("/", UserController.findAll);
User.get("/:id", UserController.findById);
User.post("/", UserController.create);
User.put("/:id", UserController.findByIdAndUpdate);
User.delete("/:id", UserController.findByIdAndDelete);

export default User;
