import { MailPlus, Search } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { team } from "@/lib/demo-data";

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Team"
        description="Invite members, manage roles, search users, and keep membership tenant-scoped."
        actions={
          <Button>
            <MailPlus className="h-4 w-4" />
            Invite member
          </Button>
        }
      />
      <section className="card p-5">
        <div className="mb-5 grid gap-3 md:grid-cols-[1fr_auto]">
          <Input placeholder="Search members" aria-label="Search members" />
          <Button variant="secondary">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>
        <div className="grid gap-3">
          {team.map((member) => (
            <div key={member.id} className="flex flex-col gap-3 rounded-md border border-border p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-slate-500">{member.email}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>{member.role}</Badge>
                <Badge className={member.status === "Invited" ? "border-amber-300 text-amber-600" : "border-accent/40 text-accent"}>
                  {member.status}
                </Badge>
                <Button variant="secondary" size="sm">
                  Change role
                </Button>
                <Button variant="ghost" size="sm">
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
