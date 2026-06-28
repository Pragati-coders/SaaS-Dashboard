import Link from "next/link";
import { AuthCard } from "@/components/auth/auth-card";

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Reset your password"
      subtitle="Enter your email and the app will send a secure reset link."
      mode="forgot"
      footer={
        <Link href="/login" className="font-medium text-primary">
          Back to login
        </Link>
      }
    />
  );
}
