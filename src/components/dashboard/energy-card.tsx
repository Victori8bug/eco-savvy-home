import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface EnergyCardProps {
  title: string;
  value: string;
  unit: string;
  subtitle: string;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning";
  className?: string;
}

export function EnergyCard({
  title,
  value,
  unit,
  subtitle,
  icon: Icon,
  variant = "default",
  className
}: EnergyCardProps) {
  const gradientStyles = {
    default: "bg-gradient-card",
    success: "bg-gradient-success",
    warning: "bg-warning text-warning-foreground"
  };

  const iconStyles = {
    default: "text-primary",
    success: "text-white",
    warning: "text-white"
  };

  return (
    <Card className={cn(
      "border-0 shadow-card-soft transition-all duration-300 hover:shadow-energy",
      gradientStyles[variant],
      className
    )}>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Icon size={20} className={iconStyles[variant]} />
            <span className={cn(
              "text-sm font-medium",
              variant === "default" ? "text-muted-foreground" : "text-white/80"
            )}>
              {title}
            </span>
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className={cn(
              "text-2xl font-bold",
              variant === "default" ? "text-foreground" : "text-white"
            )}>
              {value}
            </span>
            <span className={cn(
              "text-sm font-medium",
              variant === "default" ? "text-muted-foreground" : "text-white/80"
            )}>
              {unit}
            </span>
          </div>
          <p className={cn(
            "text-xs",
            variant === "default" ? "text-muted-foreground" : "text-white/70"
          )}>
            {subtitle}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}