import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true },
    owner: { type: String, required: true },
    tenantId: { type: Schema.Types.ObjectId, ref: "Organization", required: true, index: true },
    status: { type: String, enum: ["active", "archived", "at-risk"], default: "active" },
    progress: { type: Number, min: 0, max: 100, default: 0 },
    archivedAt: Date
  },
  { timestamps: true }
);

ProjectSchema.index({ tenantId: 1, name: "text" });

export const Project = models.Project || model("Project", ProjectSchema);
