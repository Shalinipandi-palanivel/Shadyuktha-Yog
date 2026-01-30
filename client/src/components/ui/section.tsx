import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "primary" | "pattern";
}

export function Section({ children, className, id, background = "default" }: SectionProps) {
  const bgStyles = {
    default: "bg-background",
    muted: "bg-secondary/30",
    primary: "bg-primary text-primary-foreground",
    pattern: "bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24", 
        bgStyles[background], 
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}
