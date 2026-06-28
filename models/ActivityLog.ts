import { Schema, model, models } from "mongoose";

const ActivityLogSchema = new Schema(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: "Organization", required: true, index: true },
    actorId: { type: Schema.Types.ObjectId, ref: "User" },
    actorName: String,
    action: { type: String, required: true },
    metadata: Schema.Types.Mixed
  },
  { timestamps: true }
);

export const ActivityLog = models.ActivityLog || model("ActivityLog", ActivityLogSchema);
