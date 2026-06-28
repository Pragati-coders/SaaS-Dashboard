import { Archive, Plus, Search } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/demo-data";
import { tenantScopedFilter } from "@/lib/tenant";

export default function ProjectsPage() {
  const scopedProjects = tenantScopedFilter(projects);

  return (
    <>
      <PageHeader
        title="Projects"
        description="Create, edit, archive, restore, search, filter, and paginate tenant-scoped projects."
        actions={
          <Button>
            <Plus className="h-4 w-4" />
            New project
          </Button>
        }
      />
      <div className="card p-5">
        <div className="mb-5 grid gap-3 md:grid-cols-[1fr_auto_auto]">
          <Input placeholder="Search projects" aria-label="Search projects" />
          <Button variant="secondary">
            <Search className="h-4 w-4" />
            Search
          </Button>
          <Button variant="secondary">
            <Archive className="h-4 w-4" />
            Archived
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="border-b border-border text-slate-500">
              <tr>
                <th className="py-3">Project</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {scopedProjects.map((project) => (
                <tr key={project.id} className="border-b border-border/70 last:border-0">
                  <td className="py-4 font-medium">{project.name}</td>
                  <td>{project.owner}</td>
                  <td>
                    <Badge>{project.status}</Badge>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-32 rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: `${project.progress}%` }} />
                      </div>
                      {project.progress}%
                    </div>
                  </td>
                  <td>{project.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
