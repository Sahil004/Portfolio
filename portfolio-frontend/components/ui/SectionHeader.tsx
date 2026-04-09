import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 text-[#6e73ff] text-xs font-semibold tracking-[0.15em] uppercase mb-4",
        className
      )}
    >
      <span className="w-6 h-px bg-[#6e73ff]" />
      {children}
    </div>
  );
}

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "font-display text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4 text-zinc-900 dark:text-white",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function AccentText({ children }: { children: React.ReactNode }) {
  return <em className="not-italic gradient-text">{children}</em>;
}
