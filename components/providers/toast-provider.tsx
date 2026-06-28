"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Toast = { id: string; title: string; description?: string };

const ToastContext = createContext<{ notify: (toast: Omit<Toast, "id">) => void } | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const value = useMemo(
    () => ({
      notify: (toast: Omit<Toast, "id">) => {
        const id = crypto.randomUUID();
        setToasts((current) => [...current, { ...toast, id }]);
        window.setTimeout(() => setToasts((current) => current.filter((item) => item.id !== id)), 4500);
      }
    }),
    []
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 grid w-[min(24rem,calc(100vw-2rem))] gap-3">
        {toasts.map((toast) => (
          <div key={toast.id} className="card flex items-start gap-3 p-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
            <div className="min-w-0 flex-1">
              <p className="font-medium">{toast.title}</p>
              {toast.description ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{toast.description}</p> : null}
            </div>
            <Button
              size="icon"
              variant="ghost"
              aria-label="Dismiss notification"
              onClick={() => setToasts((current) => current.filter((item) => item.id !== toast.id))}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return context;
}
