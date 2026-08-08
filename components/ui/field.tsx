import * as React from "react";
import { cn } from "@/lib/utils";

// Field: wrapper com label + mensagem de erro para qualquer input.
export function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-navy-900">
        {label}
      </label>
      {children}
      {error ? <span className="text-xs text-red-600">{error}</span> : null}
    </div>
  );
}

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "h-11 rounded-lg border border-navy-200 bg-white px-3 text-sm text-navy-900",
      "placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-28 rounded-lg border border-navy-200 bg-white px-3 py-2 text-sm text-navy-900",
      "placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-500",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export interface SelectOption {
  value: string;
  label: string;
}

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { options: SelectOption[] }
>(({ className, options, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "h-11 rounded-lg border border-navy-200 bg-white px-3 text-sm text-navy-900",
      "focus:outline-none focus:ring-2 focus:ring-brand-500",
      className
    )}
    {...props}
  >
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
));
Select.displayName = "Select";
