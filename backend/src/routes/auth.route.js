import express from "express";
import { signup, login, logout, deleteAllUsers } from "../controllers/auth.controllers.js";

const router= express.Router();

router.post("/signup",signup);
router.delete("/delete-all", deleteAllUsers);
router.post("/login", login)
router.post("/logout", logout)

export default router;
