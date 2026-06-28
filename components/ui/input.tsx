import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className="grid gap-2 text-sm font-medium" htmlFor={inputId}>
      {label ? <span>{label}</span> : null}
      <input
        id={inputId}
        className={cn(
          "focus-ring h-10 rounded-md border border-border bg-background px-3 text-sm outline-none transition placeholder:text-slate-400",
          error && "border-rose-500",
          className
        )}
        {...props}
      />
      {error ? <span className="text-xs text-rose-500">{error}</span> : null}
    </label>
  );
}
