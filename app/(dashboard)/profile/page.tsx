import { Save } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currentUser } from "@/lib/demo-data";

export default function ProfilePage() {
  return (
    <>
      <PageHeader title="Profile" description="Manage personal identity, notification preferences, and account security." />
      <section className="card max-w-2xl p-5">
        <div className="grid gap-4">
          <Input label="Name" defaultValue={currentUser.name} />
          <Input label="Email" defaultValue={currentUser.email} />
          <Input label="Role" defaultValue={currentUser.role} disabled />
          <Button className="w-fit">
            <Save className="h-4 w-4" />
            Save profile
          </Button>
        </div>
      </section>
    </>
  );
}
