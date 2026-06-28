import { Schema, model, models } from "mongoose";

const OrganizationSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    logo: String,
    plan: { type: String, enum: ["free", "pro", "enterprise"], default: "free" },
    stripeCustomerId: String,
    stripeSubscriptionId: String
  },
  { timestamps: true }
);

export const Organization = models.Organization || model("Organization", OrganizationSchema);
