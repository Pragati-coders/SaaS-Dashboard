import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "default" | "sm" | "icon";
  asChild?: boolean;
  href?: string;
};

const variants = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "border border-border bg-card text-foreground hover:bg-muted",
  ghost: "hover:bg-muted",
  danger: "bg-rose-600 text-white hover:bg-rose-700"
};

const sizes = {
  default: "h-10 px-4 text-sm",
  sm: "h-8 px-3 text-xs",
  icon: "h-9 w-9 p-0"
};

export function Button({ className, variant = "primary", size = "default", href, children, ...props }: ButtonProps) {
  const classes = cn(
    "focus-ring inline-flex items-center justify-center gap-2 rounded-md font-medium transition disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
