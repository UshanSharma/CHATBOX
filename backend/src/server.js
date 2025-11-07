//const express = require("express");

import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

import { ENV } from "./lib/env.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";

const app = express();
const __dirname=path.resolve();

const PORT= ENV.PORT || 3000;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors({origin: ENV.CLIENT_URL, credentials: true}));
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (ENV.NODE_ENV == "development"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*", (_,res) => {
        res.sendFile(path.join(__dirname,"../frontend/dist/index.html"));
    })
}
app.listen(PORT, () => {
    console.log("Server is running on PORT: " +PORT);
    connectDB();
});