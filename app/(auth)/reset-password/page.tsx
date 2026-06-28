import { AuthCard } from "@/components/auth/auth-card";

export default function ResetPasswordPage() {
  return (
    <AuthCard
      title="Choose a new password"
      subtitle="Reset tokens should be short-lived and stored as hashes in production."
      mode="reset"
    />
  );
}
