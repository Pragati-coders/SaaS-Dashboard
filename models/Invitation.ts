import { Schema, model, models } from "mongoose";

const InvitationSchema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: "Organization", required: true, index: true },
    email: { type: String, required: true, lowercase: true },
    role: { type: String, enum: ["admin", "manager", "member", "viewer"], default: "member" },
    tokenHash: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    acceptedAt: Date
  },
  { timestamps: true }
);

export const Invitation = models.Invitation || model("Invitation", InvitationSchema);
