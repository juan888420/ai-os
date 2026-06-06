import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    customerId: v.string(),
    role: v.string(),
    content: v.string(),
    createdAt: v.number(),
  }),
});