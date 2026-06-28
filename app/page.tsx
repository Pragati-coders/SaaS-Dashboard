import { ArrowRight, Building2, ShieldCheck, Sparkles } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { kpis, revenueSeries } from "@/lib/demo-data";

export default function LandingPage() {
  return (
    <>
      <MarketingHeader />
      <main>
        <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <Badge className="border-primary/30 bg-primary/10 text-primary">Multi-tenant SaaS portfolio system</Badge>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-normal md:text-7xl">
              Nexora Cloud
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              A polished SaaS operations dashboard with tenant isolation, RBAC, billing flows, analytics, team management,
              and deployment-ready architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/dashboard" asChild>
                Open live dashboard <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/pricing" asChild variant="secondary">
                View pricing
              </Button>
            </div>
          </div>
          <div className="card overflow-hidden">
            <div className="border-b border-border p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Workspace health</p>
                  <h2 className="text-2xl font-semibold">Nexora Cloud</h2>
                </div>
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-2">
              {kpis.map((item) => (
                <div key={item.label} className="rounded-md border border-border p-4">
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-2 text-3xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-sm text-accent">{item.change}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-5">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-primary" />
                <p className="text-sm">Every query, activity, project, and member is scoped to one organization.</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <p className="text-sm">RBAC protects billing, analytics, team invitations, and settings.</p>
              </div>
              <div className="mt-5 grid grid-cols-6 items-end gap-2">
                {revenueSeries.map((item) => (
                  <div key={item.month} className="grid gap-2 text-center text-xs text-slate-500">
                    <div className="rounded-t bg-primary/80" style={{ height: `${item.revenue / 420}px` }} />
                    {item.month}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-border px-6 py-12">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {["Tenant isolation", "Secure workflows", "Recruiter-ready polish"].map((title) => (
              <div key={title} className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Built with modular folders, typed data contracts, validation, access control, and a premium dashboard UI.
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
