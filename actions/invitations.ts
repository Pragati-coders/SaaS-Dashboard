"use server";

import { inviteSchema } from "@/lib/validations";
import { assertPermission } from "@/lib/rbac";
import { currentUser } from "@/lib/demo-data";
import { writeAuditLog } from "@/services/audit";

export async function inviteMember(_: unknown, formData: FormData) {
  assertPermission(currentUser.role, "member:invite");
  const parsed = inviteSchema.safeParse({
    email: formData.get("email"),
    role: formData.get("role")
  });

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid invite" };
  }

  await writeAuditLog({
    tenantId: currentUser.tenantId,
    actorName: currentUser.name,
    action: `invited ${parsed.data.email} as ${parsed.data.role}`
  });

  return { ok: true, message: "Invitation queued" };
}
