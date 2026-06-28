"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bell,
  BriefcaseBusiness,
  Building2,
  CreditCard,
  LayoutDashboard,
  LogOut,
  Menu,
  Moon,
  Settings,
  Shield,
  Sun,
  Users
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { currentTenant, currentUser, notifications } from "@/lib/demo-data";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/providers/theme-provider";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/projects", label: "Projects", icon: BriefcaseBusiness },
  { href: "/team", label: "Team", icon: Users },
  { href: "/billing", label: "Billing", icon: CreditCard },
  { href: "/notifications", label: "Notifications", icon: Bell },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/organization", label: "Organization", icon: Building2 },
  { href: "/admin", label: "Admin", icon: Shield }
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const unread = notifications.filter((item) => item.unread).length;

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[17rem_1fr]">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 border-r border-border bg-card p-4 transition lg:static lg:w-auto lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center gap-3 px-2">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-primary text-white">{currentTenant.logo}</div>
          <div className="min-w-0">
            <p className="truncate font-semibold">{currentTenant.name}</p>
            <p className="text-xs text-slate-500">{currentTenant.slug}</p>
          </div>
        </div>
        <Badge className="mt-5 border-accent/30 bg-accent/10 text-accent">Pro workspace</Badge>
        <nav className="mt-6 grid gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "focus-ring flex items-center gap-3 rounded-md px-3 py-2 text-sm transition",
                  active ? "bg-primary text-white" : "text-slate-600 hover:bg-muted dark:text-slate-300"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="flex-1">{item.label}</span>
                {item.href === "/notifications" && unread ? <span className="rounded-full bg-accent px-2 py-0.5 text-xs text-white">{unread}</span> : null}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto pt-8">
          <div className="rounded-lg border border-border p-3">
            <p className="text-sm font-medium">{currentUser.name}</p>
            <p className="text-xs text-slate-500">{currentUser.role}</p>
          </div>
        </div>
      </aside>
      <div className="min-w-0">
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-background/85 px-4 backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <Button size="icon" variant="secondary" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
              <Menu className="h-4 w-4" />
            </Button>
            <div>
              <p className="text-xs text-slate-500">Workspace</p>
              <p className="font-medium">{currentTenant.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button href="/login" variant="secondary" size="sm">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </header>
        <main className="px-4 py-6 md:px-6">{children}</main>
      </div>
    </div>
  );
}
