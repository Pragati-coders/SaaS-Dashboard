import { CreditCard, Download, ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { currentTenant } from "@/lib/demo-data";
import { plans } from "@/services/billing";

export default function BillingPage() {
  return (
    <>
      <PageHeader
        title="Billing"
        description="Upgrade, downgrade, cancel subscriptions, review billing history, and open the Stripe customer portal."
        actions={
          <Button>
            <ExternalLink className="h-4 w-4" />
            Customer portal
          </Button>
        }
      />
      <section className="grid gap-6 xl:grid-cols-[1fr_24rem]">
        <div className="card p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold">Current subscription</h2>
              <p className="mt-2 text-sm text-slate-500">Workspace is on the {currentTenant.plan} plan.</p>
            </div>
            <Badge className="border-accent/40 text-accent">Healthy</Badge>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className="rounded-lg border border-border p-4">
                <p className="font-semibold">{plan.name}</p>
                <p className="mt-2 text-2xl font-semibold">{plan.price}</p>
                <Button className="mt-4 w-full" variant={plan.name.toLowerCase() === currentTenant.plan ? "secondary" : "primary"}>
                  {plan.name.toLowerCase() === currentTenant.plan ? "Current" : "Switch"}
                </Button>
              </article>
            ))}
          </div>
        </div>
        <div className="card p-5">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <CreditCard className="h-5 w-5 text-primary" />
            Billing history
          </h2>
          <div className="mt-4 grid gap-3">
            {["INV-2026-006", "INV-2026-005", "INV-2026-004"].map((invoice) => (
              <div key={invoice} className="flex items-center justify-between rounded-md border border-border p-3">
                <div>
                  <p className="text-sm font-medium">{invoice}</p>
                  <p className="text-xs text-slate-500">Paid</p>
                </div>
                <Button size="icon" variant="ghost" aria-label={`Download ${invoice}`}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
