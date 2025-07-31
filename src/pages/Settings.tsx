import { Card, CardContent } from "@/components/ui/card";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Settings as SettingsIcon, Bell, Shield, Download, HelpCircle } from "lucide-react";

const Settings = () => {
  const settingsItems = [
    {
      icon: Bell,
      title: "Notifications",
      description: "Energy alerts and recommendations",
    },
    {
      icon: Shield,
      title: "Privacy",
      description: "Data sharing and privacy settings",
    },
    {
      icon: Download,
      title: "Data Export",
      description: "Download your energy data",
    },
    {
      icon: HelpCircle,
      title: "Help & Support",
      description: "FAQs and contact information",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-6">
          <SettingsIcon size={24} className="text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        </div>

        <Card className="border-0 shadow-card-soft bg-gradient-primary text-primary-foreground mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <SettingsIcon size={20} />
              <h2 className="font-bold">Configuration Options</h2>
            </div>
            <p className="text-sm text-primary-foreground/90">
              Notification preferences, energy goals, appliance management, privacy settings, and data export options.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {settingsItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-card-soft bg-gradient-card hover:shadow-energy transition-all duration-200 cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-energy-blue-light rounded-lg">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Settings;