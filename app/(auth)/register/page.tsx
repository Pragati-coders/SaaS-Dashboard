import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";

export default function RegisterPage() {
  return (
    <AuthCard
      title="Create your workspace"
      subtitle="Register an organization and start in an isolated tenant."
      mode="register"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary">
            Log in
          </Link>
        </>
      }
    />
  );
}
