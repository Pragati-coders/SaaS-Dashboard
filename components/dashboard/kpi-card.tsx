export function KpiCard({ label, value, change }: { label: string; value: string; change: string }) {
  return (
    <article className="card p-5">
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-semibold">{value}</p>
      <p className="mt-2 text-sm text-accent">{change}</p>
    </article>
  );
}
