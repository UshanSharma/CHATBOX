import express from "express";
import { signup, deleteAllUsers } from "../controllers/auth.controllers.js";

const router= express.Router();

router.post("/signup",signup);
router.delete("/delete-all", deleteAllUsers);

router.get("/login", (req,res) => {
    res.send("Login endpoint");
})

router.get("/logout", (req,res) => {
    res.send("Logout endpoint");
})

export default router;
