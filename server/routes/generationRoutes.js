import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

dotenv.config();

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("Hello from DALL-E");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log(prompt);
    

    const aiResponse = await client.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: 'b64_json'
    });
    const image = aiResponse.data.data[0].image;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error);
    res.status(500).send(error?.response);
  }
});

export default router;
