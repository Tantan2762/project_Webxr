import Anthropic from "@anthropic-ai/sdk";

export default async function handler(req, res) {
  console.log("API KEY:", process.env.ANTHROPIC_API_KEY);
  if (req.method !== "POST") {
    return res.status(405).json({ errror: "Method tidak diijinkan" });
  }

  try {
    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const { messages, system } = req.body;

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system,
      messages,
    });

    res.status(200).json({ content: response.content });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Terjadi kesalahan pada server!",
    });
  }
}
