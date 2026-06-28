import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const registerSchema = authSchema.extend({
  name: z.string().min(2),
  organizationName: z.string().min(2),
  workspaceSlug: z.string().regex(/^[a-z0-9-]+$/, "Use lowercase letters, numbers, and hyphens only")
});

export const projectSchema = z.object({
  name: z.string().min(3),
  owner: z.string().min(2),
  status: z.enum(["active", "archived", "at-risk"])
});

export const inviteSchema = z.object({
  email: z.string().email(),
  role: z.enum(["admin", "manager", "member", "viewer"])
});
