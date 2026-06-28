import { CalendarDays, Download } from "lucide-react";
import { GrowthChart, RevenueChart, SubscriptionChart } from "@/components/dashboard/charts";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        title="Analytics"
        description="Track revenue, growth, project creation, subscription mix, and active user trends."
        actions={
          <>
            <Button variant="secondary">
              <CalendarDays className="h-4 w-4" />
              Last 30 days
            </Button>
            <Button>
              <Download className="h-4 w-4" />
              Export
            </Button>
          </>
        }
      />
      <section className="grid gap-6 xl:grid-cols-2">
        <div className="card p-5">
          <h2 className="text-lg font-semibold">Revenue over time</h2>
          <RevenueChart />
        </div>
        <div className="card p-5">
          <h2 className="text-lg font-semibold">Monthly growth</h2>
          <GrowthChart />
        </div>
        <div className="card p-5">
          <h2 className="text-lg font-semibold">Subscription distribution</h2>
          <SubscriptionChart />
        </div>
        <div className="card p-5">
          <h2 className="text-lg font-semibold">Active vs inactive users</h2>
          <div className="mt-8 grid gap-5">
            {[
              ["Active users", "86%"],
              ["Inactive users", "14%"],
              ["Trial conversion", "31%"]
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-3 rounded-full bg-muted">
                  <div className="h-3 rounded-full bg-accent" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
