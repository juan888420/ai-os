import { internalMutation, mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { v } from "convex/values";

export const sendMessage = mutation({
  args: {
    customerId: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", {
      customerId: args.customerId,
      role: "user",
      content: args.content,
      createdAt: Date.now(),
    });

    await ctx.scheduler.runAfter(0, internal.claude.askClaude, {
      customerId: args.customerId,
    });

    return "Mensaje guardado";
  },
});

export const saveAssistantMessage = internalMutation({
  args: {
    customerId: v.string(),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", {
      customerId: args.customerId,
      role: "assistant",
      content: args.content,
      createdAt: Date.now(),
    });
  },
});

export const getMessages = query({
  args: {
    customerId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("messages")
      .filter((q) => q.eq(q.field("customerId"), args.customerId))
      .collect();
  },
});
