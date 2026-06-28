"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/providers/toast-provider";

type Mode = "login" | "register" | "forgot" | "reset";

export function AuthCard({
  title,
  subtitle,
  mode,
  footer
}: {
  title: string;
  subtitle: string;
  mode: Mode;
  footer?: React.ReactNode;
}) {
  const { notify } = useToast();
  const [loading, setLoading] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      setLoading(false);
      notify({
        title: mode === "login" ? "Demo session ready" : "Flow validated",
        description: "Connect the server action to MongoDB/NextAuth when you add production credentials."
      });
      if (mode === "login") {
        window.location.href = "/dashboard";
      }
    }, 600);
  }

  return (
    <main className="grid min-h-screen place-items-center px-6 py-10">
      <section className="card w-full max-w-md p-6">
        <div className="mb-8">
          <div className="grid h-11 w-11 place-items-center rounded-md bg-primary text-lg font-semibold text-white">N</div>
          <h1 className="mt-6 text-3xl font-semibold">{title}</h1>
          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{subtitle}</p>
        </div>
        <form className="grid gap-4" onSubmit={submit}>
          {mode === "register" ? (
            <>
              <Input label="Full name" name="name" placeholder="Pragati Sharma" required />
              <Input label="Organization" name="organizationName" placeholder="Nexora Cloud" required />
              <Input label="Workspace slug" name="workspaceSlug" placeholder="nexora-cloud" required />
            </>
          ) : null}
          {mode !== "reset" ? <Input label="Email" name="email" type="email" placeholder="pragati@example.com" required /> : null}
          {mode !== "forgot" ? <Input label="Password" name="password" type="password" placeholder="password123" required /> : null}
          {mode === "reset" ? <Input label="Confirm password" name="confirmPassword" type="password" required /> : null}
          <Button disabled={loading} className="mt-2">
            {loading ? "Please wait..." : "Continue"} <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
        {footer ? <p className="mt-6 text-center text-sm text-slate-500">{footer}</p> : null}
      </section>
    </main>
  );
}
