export type Role = "owner" | "admin" | "manager" | "member" | "viewer";
export type Plan = "free" | "pro" | "enterprise";
export type ProjectStatus = "active" | "archived" | "at-risk";

export type Permission =
  | "project:create"
  | "project:edit"
  | "project:delete"
  | "member:invite"
  | "billing:manage"
  | "analytics:read"
  | "settings:manage";

export type Organization = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  plan: Plan;
  members: number;
  projects: number;
};

export type Project = {
  id: string;
  name: string;
  owner: string;
  tenantId: string;
  status: ProjectStatus;
  progress: number;
  createdAt: string;
  updatedAt: string;
};

export type Activity = {
  id: string;
  actor: string;
  action: string;
  tenantId: string;
  createdAt: string;
};

export type Notification = {
  id: string;
  title: string;
  type: "invite" | "billing" | "system" | "project";
  unread: boolean;
  createdAt: string;
};
