import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
// app.use(
//   cors({
//     origin: "https://project-webxr.vercel.app/",
//   }),
// );

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const { messages, system } = req.body;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [{ role: "system", content: system }, ...messages],
        }),
      },
    );

    const data = await response.json();
    const text = data?.choices?.[0]?.message?.content;

    res.json({
      content: [{ text }],
    });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});
