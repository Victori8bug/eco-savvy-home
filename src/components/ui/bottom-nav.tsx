import { cn } from "@/lib/utils";
import { Home, Zap, TrendingUp, Users, Settings } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

interface BottomNavProps {
  className?: string;
}

const navItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Zap, label: "Appliances", path: "/appliances" },
  { icon: TrendingUp, label: "Insights", path: "/insights" },
  { icon: Users, label: "Community", path: "/community" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function BottomNav({ className }: BottomNavProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={cn(
      "fixed bottom-0 left-0 right-0 bg-card border-t border-border",
      "flex items-center justify-around py-2 px-4",
      "shadow-energy z-50",
      className
    )}>
      {navItems.map(({ icon: Icon, label, path }) => {
        const isActive = location.pathname === path;
        return (
          <button
            key={path}
            onClick={() => navigate(path)}
            className={cn(
              "flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200",
              "min-w-0 flex-1",
              isActive
                ? "text-primary bg-energy-blue-light"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            <Icon 
              size={20} 
              className={cn(
                "transition-all duration-200",
                isActive && "scale-110"
              )} 
            />
            <span className="text-xs font-medium truncate">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}