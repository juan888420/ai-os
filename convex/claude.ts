"use node";

import { internalAction } from "./_generated/server";
import { api, internal } from "./_generated/api";
import { v } from "convex/values";
import Anthropic from "@anthropic-ai/sdk";

export const askClaude = internalAction({
  args: {
    customerId: v.string(),
  },
  handler: async (ctx, args) => {
    const history = await ctx.runQuery(api.messages.getMessages, {
      customerId: args.customerId,
    });

    const messages = history.map((message) => ({
      role: message.role === "assistant" ? ("assistant" as const) : ("user" as const),
      content: message.content,
    }));

    let reply: string;
    try {
      const anthropic = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
      });

      const response = await anthropic.messages.create({
        model: "claude-sonnet-5",
        max_tokens: 1024,
        messages,
      });

      const textBlock = response.content.find((block) => block.type === "text");
      reply = textBlock?.text ?? "No pude generar una respuesta.";
    } catch (error) {
      console.error("Claude API error:", error);
      reply = "Lo siento, ocurrió un error al generar la respuesta. Intenta de nuevo.";
    }

    await ctx.runMutation(internal.messages.saveAssistantMessage, {
      customerId: args.customerId,
      content: reply,
    });
  },
});