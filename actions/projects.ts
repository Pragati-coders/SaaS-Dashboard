"use server";

import { revalidatePath } from "next/cache";
import { projectSchema } from "@/lib/validations";
import { assertPermission } from "@/lib/rbac";
import { currentUser } from "@/lib/demo-data";
import { writeAuditLog } from "@/services/audit";

export async function createProject(_: unknown, formData: FormData) {
  assertPermission(currentUser.role, "project:create");
  const parsed = projectSchema.safeParse({
    name: formData.get("name"),
    owner: formData.get("owner"),
    status: formData.get("status")
  });

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid project" };
  }

  await writeAuditLog({
    tenantId: currentUser.tenantId,
    actorName: currentUser.name,
    action: `created project ${parsed.data.name}`
  });

  revalidatePath("/projects");
  return { ok: true, message: "Project created" };
}
