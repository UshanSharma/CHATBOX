import express from "express";
import { signup, login, logout, updateProfile,deleteAllUsers } from "../controllers/auth.controllers.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import {arcjetProtection} from "../middleware/arcjet.middleware.js";
import arcjet from "@arcjet/node";

const router= express.Router();

router.use(arcjetProtection);

router.post("/signup",signup);
router.delete("/delete-all", deleteAllUsers);
router.post("/login", arcjetProtection, login);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, (req,res) => res.status(200).json(req.user))

export default router;
