export async function writeAuditLog(input: {
  tenantId: string;
  actorName: string;
  action: string;
  metadata?: Record<string, unknown>;
}) {
  // In production, insert into ActivityLog after connectDb().
  console.info("[audit]", input);
}
