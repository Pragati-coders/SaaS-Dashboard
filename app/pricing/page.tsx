import { Check } from "lucide-react";
import { MarketingHeader } from "@/components/marketing/header";
import { Button } from "@/components/ui/button";
import { plans } from "@/services/billing";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  return (
    <>
      <MarketingHeader />
      <main className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold">Plans for every workspace stage</h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Stripe checkout and customer portal integration points are ready for real price IDs.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={cn("card p-6", plan.highlighted && "border-primary ring-2 ring-primary/20")}>
              <h2 className="text-xl font-semibold">{plan.name}</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{plan.description}</p>
              <p className="mt-6 text-4xl font-semibold">{plan.price}</p>
              <Button className="mt-6 w-full" variant={plan.highlighted ? "primary" : "secondary"}>
                Choose {plan.name}
              </Button>
              <ul className="mt-6 grid gap-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
