import { Bell, CheckCircle2, Clock } from "lucide-react";
import { RevenueChart } from "@/components/dashboard/charts";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { activities, currentUser, kpis, notifications, projects } from "@/lib/demo-data";

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" description={`Welcome back, ${currentUser.name}. Here is what changed in your workspace.`} />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpis.map((item) => (
          <KpiCard key={item.label} {...item} />
        ))}
      </section>
      <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_24rem]">
        <div className="card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Revenue over time</h2>
            <span className="text-sm text-slate-500">Last 6 months</span>
          </div>
          <RevenueChart />
        </div>
        <div className="grid gap-6">
          <div className="card p-5">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Bell className="h-5 w-5 text-primary" />
              Notifications
            </h2>
            <div className="mt-4 grid gap-3">
              {notifications.slice(0, 3).map((item) => (
                <div key={item.id} className="rounded-md border border-border p-3">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.createdAt}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-5">
            <h2 className="text-lg font-semibold">Pending tasks</h2>
            <div className="mt-4 grid gap-3">
              {projects.slice(0, 3).map((project) => (
                <div key={project.id} className="flex items-center gap-3">
                  {project.status === "active" ? <CheckCircle2 className="h-4 w-4 text-accent" /> : <Clock className="h-4 w-4 text-amber-500" />}
                  <span className="text-sm">{project.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-6 card p-5">
        <h2 className="text-lg font-semibold">Recent activity</h2>
        <div className="mt-4 grid gap-3">
          {activities.map((activity) => (
            <div key={activity.id} className="flex flex-col justify-between gap-2 rounded-md border border-border p-3 md:flex-row md:items-center">
              <p className="text-sm">
                <span className="font-medium">{activity.actor}</span> {activity.action}
              </p>
              <span className="text-xs text-slate-500">{activity.createdAt}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
