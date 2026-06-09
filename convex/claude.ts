"use node";

import { action } from "./_generated/server";
import Anthropic from "@anthropic-ai/sdk";

export const askClaude = action({
  args: {},
  handler: async () => {
    console.log(process.env.ANTHROPIC_API_KEY);
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 100,
      messages: [
        {
          role: "user",
          content: "Di hola",
        },
      ],
    });

    return response.content;
  },
});