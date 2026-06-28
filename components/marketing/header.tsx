import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-white">N</span>
          Nexora Cloud
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Login</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        <Button href="/register" asChild className="hidden md:inline-flex">
          Get started
        </Button>
        <Button href="/login" asChild size="icon" variant="secondary" className="md:hidden" aria-label="Login">
          <LogIn className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
