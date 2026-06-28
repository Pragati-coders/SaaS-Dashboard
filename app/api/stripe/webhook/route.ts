import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/services/billing";
import { writeAuditLog } from "@/services/audit";

export async function POST(request: Request) {
  const body = await request.text();
  const signature = (await headers()).get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json({ error: "Stripe webhook is not configured" }, { status: 400 });
  }

  try {
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.deleted") {
      await writeAuditLog({
        tenantId: "resolved-from-stripe-customer",
        actorName: "Stripe",
        action: event.type,
        metadata: { eventId: event.id }
      });
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Invalid webhook";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
