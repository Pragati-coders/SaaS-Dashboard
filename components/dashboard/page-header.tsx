export function PageHeader({
  title,
  description,
  actions
}: {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm text-slate-500">Nexora Cloud / {title}</p>
        <h1 className="mt-1 text-3xl font-semibold">{title}</h1>
        {description ? <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
    </div>
  );
}
