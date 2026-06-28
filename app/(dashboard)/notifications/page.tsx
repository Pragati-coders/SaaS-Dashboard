import { Bell, CheckCheck } from "lucide-react";
import { PageHeader } from "@/components/dashboard/page-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notifications } from "@/lib/demo-data";

export default function NotificationsPage() {
  return (
    <>
      <PageHeader
        title="Notifications"
        description="In-app notifications for invites, billing updates, project events, and system alerts."
        actions={
          <Button variant="secondary">
            <CheckCheck className="h-4 w-4" />
            Mark all read
          </Button>
        }
      />
      <section className="grid gap-3">
        {notifications.map((notification) => (
          <article key={notification.id} className="card flex items-start gap-4 p-4">
            <Bell className={notification.unread ? "mt-1 h-5 w-5 text-primary" : "mt-1 h-5 w-5 text-slate-400"} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="font-medium">{notification.title}</h2>
                {notification.unread ? <Badge className="border-primary/40 text-primary">Unread</Badge> : null}
              </div>
              <p className="mt-1 text-sm text-slate-500">{notification.createdAt}</p>
            </div>
            <Badge>{notification.type}</Badge>
          </article>
        ))}
      </section>
    </>
  );
}
