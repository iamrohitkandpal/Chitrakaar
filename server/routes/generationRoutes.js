import express from "express";
import * as dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Hugging Face API URL and Token
    const HF_API_URL =
      "https://router.huggingface.co/nebius/v1/images/generations";
    const HF_API_TOKEN = process.env.HUGGING_FACE_TOKEN;

    console.log("Making request to Hugging Face Nebius Inference Provider...");
    console.log("URL:", HF_API_URL);
    console.log("Token:", `${HF_API_TOKEN.slice(0, 8)}...`);

    // Send the request to Hugging Face API
    const response = await fetch(HF_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${HF_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "stability/stable-diffusion-xl-base-1.0",
        prompt: prompt,
        response_format: "b64_json",
      }),
    });

    console.log("Response Status:", response.status);

    // If the model is loading or returns JSON error, surface that instead of pretending it's an image

    if (!response.ok) {
      let errorData;

      try {
        errorData = await response.json();
      } catch {
        const text = await response.text();
        return res.status(502).json({
          error: "Hugging Face API error (non-JSON)",
          details: text,
        });
      }

      return res.status(response.status).json({
        error: "Hugging Face Provider error",
        details: errorData,
      });
    }

    const data = await response.json();

    if (!data.data || !data.data[0]?.b64_json) {
      return res.status(502).json({
        error: "Unexpected response format from provider",
        details: data,
      });
    }

    // Convert response to Base64 format for frontend usage
    const base64Image = data.data[0].b64_json;
    res.status(200).json({
      photo: `data:image/png;base64,${base64Image}`,
    });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({
      error: "Internal server error while generation image",
      details: error.message,
    });
  }
});

export default router;
