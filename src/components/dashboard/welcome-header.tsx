import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import energyHero from "@/assets/energy-hero.jpg";

interface WelcomeHeaderProps {
  userName: string;
  subtitle: string;
  notificationCount?: number;
}

export function WelcomeHeader({ 
  userName, 
  subtitle, 
  notificationCount = 0 
}: WelcomeHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-primary p-6 mb-6">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={energyHero} 
          alt="Energy Dashboard" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">
              Hello, {userName}!
            </h1>
            <p className="text-white/80 text-sm">
              {subtitle}
            </p>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 relative"
          >
            <Bell size={20} />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-warning text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notificationCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}