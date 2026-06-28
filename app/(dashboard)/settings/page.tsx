import { Save } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { currentTenant } from "@/lib/demo-data";

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Organization settings are guarded by RBAC and should only be editable by owners and admins."
        actions={
          <Button>
            <Save className="h-4 w-4" />
            Save changes
          </Button>
        }
      />
      <section className="grid gap-6 xl:grid-cols-2">
        <div className="card p-5">
          <h2 className="text-lg font-semibold">Workspace details</h2>
          <div className="mt-5 grid gap-4">
            <Input label="Organization name" defaultValue={currentTenant.name} />
            <Input label="Workspace slug" defaultValue={currentTenant.slug} />
            <Input label="Logo initial" defaultValue={currentTenant.logo} />
          </div>
        </div>
        <div className="card p-5">
          <h2 className="text-lg font-semibold">Security</h2>
          <div className="mt-5 grid gap-4">
            {["Require strong passwords", "Enable audit log exports", "Restrict billing to owners"].map((setting) => (
              <label key={setting} className="flex items-center justify-between rounded-md border border-border p-4 text-sm">
                {setting}
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-sky-600" />
              </label>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
