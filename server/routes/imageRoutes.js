import express from "express";
import * as dotenv from "dotenv";
import { v2 as Cloudinary } from "cloudinary";

import Image from "../mongodb/models/images.js";

dotenv.config();

const router = express.Router();

Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Get All Images
router.route("/").get(async (req, res) => {
  try {
    const images = await Image.find({});
    res.status(200).json({ success: true, data: images });
  } catch (error) {
    console.error("Error fetching posts:", error.message); // Debugging
    res.status(500).json({ success: false, message: "Fetching posts failed, please try again" });
  }
});

// Create an Image Post
router.route("/create").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    console.log("Photo received:", photo); // Debugging

    const photoURL = await Cloudinary.uploader.upload(photo);
    const newImage = await Image.create({
      name,
      prompt,
      photo: photoURL.url,
    });

    res.status(201).json({ success: true, data: newImage });
  } catch (error) {
    console.error("Error creating post:", error.message); // Debugging
    res.status(500).json({ success: false, message: "Unable to create a post, please try again" });
  }
});

export default router;
