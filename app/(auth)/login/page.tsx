import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Use pragati@example.com and password123 for the local demo."
      mode="login"
      footer={
        <>
          New to Nexora?{" "}
          <Link href="/register" className="font-medium text-primary">
            Create an account
          </Link>
        </>
      }
    />
  );
}
