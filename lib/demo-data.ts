import type { Activity, Notification, Organization, Project, Role } from "@/types";

export const currentTenant: Organization = {
  id: "org_nexora",
  name: "Nexora Cloud",
  slug: "nexora-cloud",
  logo: "N",
  plan: "pro",
  members: 42,
  projects: 18
};

export const currentUser = {
  id: "usr_pragati",
  name: "Pragati Sharma",
  email: "pragati@example.com",
  role: "owner" as Role,
  tenantId: currentTenant.id
};

export const kpis = [
  { label: "Total users", value: "42", change: "+12.5%" },
  { label: "Projects", value: "18", change: "+4 this week" },
  { label: "MRR", value: "$24,800", change: "+18.2%" },
  { label: "Active subscriptions", value: "31", change: "96.8% healthy" }
];

export const revenueSeries = [
  { month: "Jan", revenue: 12400, users: 120, projects: 22 },
  { month: "Feb", revenue: 15100, users: 142, projects: 28 },
  { month: "Mar", revenue: 17800, users: 171, projects: 35 },
  { month: "Apr", revenue: 21100, users: 205, projects: 42 },
  { month: "May", revenue: 22900, users: 231, projects: 51 },
  { month: "Jun", revenue: 24800, users: 264, projects: 58 }
];

export const subscriptions = [
  { name: "Free", value: 24 },
  { name: "Pro", value: 58 },
  { name: "Enterprise", value: 18 }
];

export const projects: Project[] = [
  {
    id: "prj_1",
    name: "Billing automation",
    owner: "Aarav Mehta",
    tenantId: currentTenant.id,
    status: "active",
    progress: 82,
    createdAt: "2026-06-03",
    updatedAt: "2026-06-24"
  },
  {
    id: "prj_2",
    name: "Enterprise SSO rollout",
    owner: "Maya Iyer",
    tenantId: currentTenant.id,
    status: "at-risk",
    progress: 46,
    createdAt: "2026-05-20",
    updatedAt: "2026-06-21"
  },
  {
    id: "prj_3",
    name: "Usage analytics v2",
    owner: "Kabir Rao",
    tenantId: currentTenant.id,
    status: "active",
    progress: 67,
    createdAt: "2026-06-10",
    updatedAt: "2026-06-25"
  },
  {
    id: "prj_4",
    name: "Legacy import cleanup",
    owner: "Nisha Verma",
    tenantId: currentTenant.id,
    status: "archived",
    progress: 100,
    createdAt: "2026-04-11",
    updatedAt: "2026-06-01"
  }
];

export const team = [
  { id: "usr_1", name: "Pragati Sharma", email: "pragati@example.com", role: "owner", status: "Active" },
  { id: "usr_2", name: "Aarav Mehta", email: "aarav@example.com", role: "admin", status: "Active" },
  { id: "usr_3", name: "Maya Iyer", email: "maya@example.com", role: "manager", status: "Invited" },
  { id: "usr_4", name: "Kabir Rao", email: "kabir@example.com", role: "member", status: "Active" },
  { id: "usr_5", name: "Nisha Verma", email: "nisha@example.com", role: "viewer", status: "Active" }
];

export const activities: Activity[] = [
  { id: "act_1", actor: "Pragati Sharma", action: "upgraded workspace to Pro", tenantId: currentTenant.id, createdAt: "10 minutes ago" },
  { id: "act_2", actor: "Aarav Mehta", action: "created Billing automation", tenantId: currentTenant.id, createdAt: "1 hour ago" },
  { id: "act_3", actor: "Maya Iyer", action: "invited two new teammates", tenantId: currentTenant.id, createdAt: "Yesterday" },
  { id: "act_4", actor: "System", action: "processed monthly invoice", tenantId: currentTenant.id, createdAt: "Jun 24, 2026" }
];

export const notifications: Notification[] = [
  { id: "ntf_1", title: "Stripe invoice paid successfully", type: "billing", unread: true, createdAt: "12m ago" },
  { id: "ntf_2", title: "Maya accepted her workspace invite", type: "invite", unread: true, createdAt: "2h ago" },
  { id: "ntf_3", title: "Enterprise SSO project needs review", type: "project", unread: false, createdAt: "1d ago" },
  { id: "ntf_4", title: "New audit export is ready", type: "system", unread: false, createdAt: "2d ago" }
];

export const platformStats = [
  { label: "Organizations", value: "128" },
  { label: "Users", value: "8,420" },
  { label: "Platform MRR", value: "$318k" },
  { label: "Feature flags", value: "14" }
];
