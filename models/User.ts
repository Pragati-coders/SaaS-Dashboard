import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    passwordHash: { type: String, required: true },
    tenantId: { type: Schema.Types.ObjectId, ref: "Organization", required: true, index: true },
    role: { type: String, enum: ["owner", "admin", "manager", "member", "viewer"], default: "member" },
    lastLoginAt: Date
  },
  { timestamps: true }
);

export const User = models.User || model("User", UserSchema);
