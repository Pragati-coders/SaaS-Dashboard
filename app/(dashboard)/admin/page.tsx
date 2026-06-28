import { Flag, Shield } from "lucide-react";
import { GrowthChart, RevenueChart } from "@/components/dashboard/charts";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { PageHeader } from "@/components/dashboard/page-header";
import { Badge } from "@/components/ui/badge";
import { platformStats } from "@/lib/demo-data";

export default function AdminPage() {
  return (
    <>
      <PageHeader title="Admin Dashboard" description="Platform-level administration is separated from tenant workspaces." />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {platformStats.map((item) => (
          <KpiCard key={item.label} label={item.label} value={item.value} change="Platform scope" />
        ))}
      </section>
      <section className="mt-6 grid gap-6 xl:grid-cols-2">
        <div className="card p-5">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <Shield className="h-5 w-5 text-primary" />
            Global revenue
          </h2>
          <RevenueChart />
        </div>
        <div className="card p-5">
          <h2 className="text-lg font-semibold">Subscription statistics</h2>
          <GrowthChart />
        </div>
      </section>
      <section className="mt-6 card p-5">
        <h2 className="flex items-center gap-2 text-lg font-semibold">
          <Flag className="h-5 w-5 text-accent" />
          Feature flags
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {["new-analytics-engine", "enterprise-sso", "usage-based-billing"].map((flag) => (
            <div key={flag} className="rounded-md border border-border p-4">
              <p className="font-medium">{flag}</p>
              <Badge className="mt-3 border-accent/40 text-accent">Enabled</Badge>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
