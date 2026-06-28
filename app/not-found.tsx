import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <section className="max-w-md text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">404</p>
        <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
        <p className="mt-3 text-muted-foreground">
          The workspace route you requested does not exist or your account cannot access it.
        </p>
        <Button asChild className="mt-8">
          <Link href="/dashboard">Return to dashboard</Link>
        </Button>
      </section>
    </main>
  );
}
