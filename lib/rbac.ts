import type { Permission, Role } from "@/types";

export const rolePermissions: Record<Role, Permission[]> = {
  owner: ["project:create", "project:edit", "project:delete", "member:invite", "billing:manage", "analytics:read", "settings:manage"],
  admin: ["project:create", "project:edit", "project:delete", "member:invite", "billing:manage", "analytics:read", "settings:manage"],
  manager: ["project:create", "project:edit", "member:invite", "analytics:read"],
  member: ["project:create", "project:edit"],
  viewer: ["analytics:read"]
};

export function can(role: Role, permission: Permission) {
  return rolePermissions[role].includes(permission);
}

export function assertPermission(role: Role, permission: Permission) {
  if (!can(role, permission)) {
    throw new Error("Access denied");
  }
}
