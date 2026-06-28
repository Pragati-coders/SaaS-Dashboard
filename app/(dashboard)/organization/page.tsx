import { Building2, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Badge } from "@/components/ui/badge";
import { currentTenant, team } from "@/lib/demo-data";

export default function OrganizationPage() {
  return (
    <>
      <PageHeader title="Organization Management" description="Review workspace identity, plan state, members, and isolation metadata." />
      <section className="grid gap-6 xl:grid-cols-[24rem_1fr]">
        <div className="card p-5">
          <div className="grid h-16 w-16 place-items-center rounded-lg bg-primary text-2xl font-semibold text-white">{currentTenant.logo}</div>
          <h2 className="mt-5 text-2xl font-semibold">{currentTenant.name}</h2>
          <p className="mt-1 text-sm text-slate-500">{currentTenant.slug}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Badge>{currentTenant.plan}</Badge>
            <Badge>{currentTenant.members} members</Badge>
            <Badge>{currentTenant.projects} projects</Badge>
          </div>
        </div>
        <div className="card p-5">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <ShieldCheck className="h-5 w-5 text-accent" />
            Tenant isolation
          </h2>
          <div className="mt-5 grid gap-3">
            {[
              ["Tenant ID", currentTenant.id],
              ["Query guard", "All service queries include tenantId"],
              ["Member scope", `${team.length} visible users in this workspace`],
              ["Billing scope", "Stripe customer mapped to organization"]
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-3 rounded-md border border-border p-3">
                <Building2 className="h-4 w-4 text-primary" />
                <p className="text-sm">
                  <span className="font-medium">{label}:</span> {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
