import { currentTenant } from "@/lib/demo-data";

export function getTenantFromSession() {
  return currentTenant;
}

export function tenantScopedFilter<T extends { tenantId: string }>(items: T[], tenantId = currentTenant.id) {
  return items.filter((item) => item.tenantId === tenantId);
}
