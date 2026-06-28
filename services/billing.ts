import Stripe from "stripe";
import { absoluteUrl } from "@/lib/utils";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "sk_test_placeholder", {
  typescript: true
});

export const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For validating an idea with one small team.",
    features: ["3 projects", "5 members", "Basic analytics", "Community support"]
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing teams that need billing, audit, and collaboration.",
    features: ["Unlimited projects", "Advanced analytics", "RBAC", "Stripe billing portal"],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations that need SSO, controls, and dedicated support.",
    features: ["SAML SSO", "Feature flags", "Priority support", "Custom limits"]
  }
];

export async function createBillingPortalSession(customerId: string) {
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: absoluteUrl("/billing")
  });
}
