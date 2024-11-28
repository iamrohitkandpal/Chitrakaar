// import express from "express";
// import * as dotenv from "dotenv";
// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: process.env["OPENAI_API_KEY"],
// });

// dotenv.config();

// const router = express.Router();

// router.route("/").get((req, res) => {
//   res.send("Hello from DALL-E");
// });

// router.route("/").post(async (req, res) => {
//   try {
//     console.log(req.body);
    
//     const { prompt } = req.body;

//     // Check if the prompt exceeds the character limit
//     if (prompt.length > 1000) {
//       return res.status(400).json({ error: "Prompt exceeds the maximum allowed length of 1000 characters." });
//     }

//     const aiResponse = await client.images.generate({
//       model: "dall-e-3",
//       prompt,
//       n: 1,
//       size: "1024x1024",
//       response_format: "b64_json",
//     });

//     const image = aiResponse.data.data[0].image;
//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: error.message, details: error.response?.data });

//   }
// });


// export default router;

import express from "express";
import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from Stable Diffusion!");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Hugging Face API URL and Token
    const HF_API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large";
    const HF_API_TOKEN = process.env.HUGGING_FACE_TOKEN;

    // Send the request to Hugging Face API
    const response = await fetch(HF_API_URL, {
      headers: {
        Authorization: `Bearer ${HF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ inputs: prompt }),
    });

    if (!response.ok) {
      throw new Error(`API call failed with status ${response.status}`);
    }

    // Convert response to Base64 format for frontend usage
    const blob = await response.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());
    const imgBase64 = buffer.toString("base64");

    res.status(200).json({ photo: `data:image/png;base64,${imgBase64}` });
  } catch (error) {
    console.error("Error generating image:", error.message);
    res.status(500).json({ error: "Failed to generate image" });
  }
});

export default router;

