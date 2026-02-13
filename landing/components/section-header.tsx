import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SectionHeader({
  badge,
  title,
  description,
  className,
}: {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-3 max-w-xl", className)}>
      {badge && (
        <Badge variant="outline" className="w-fit">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl font-black tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
