import { mutation, query } from "./_generated/server";
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

    return "Mensaje guardado";
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