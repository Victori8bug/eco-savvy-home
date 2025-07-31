import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Refrigerator, Waves, Thermometer, LucideIcon } from "lucide-react";

interface ApplianceData {
  name: string;
  icon: LucideIcon;
  power: string;
  dailyUsage: string;
  dailyCost: string;
  status: "active" | "inactive";
  recommendation?: string;
}

const appliances: ApplianceData[] = [
  {
    name: "Dishwasher",
    icon: Waves,
    power: "0W",
    dailyUsage: "1.8kWh",
    dailyCost: "€0.54",
    status: "inactive",
    recommendation: "Schedule for 2:00 AM when solar energy is stored and rates are lowest. Save €0.15 and reduce peak demand."
  },
  {
    name: "Refrigerator",
    icon: Refrigerator,
    power: "150W",
    dailyUsage: "3.6kWh",
    dailyCost: "€1.08",
    status: "active"
  },
  {
    name: "Air Conditioning",
    icon: Thermometer,
    power: "2500W",
    dailyUsage: "8.2kWh",
    dailyCost: "€2.46",
    status: "active",
    recommendation: "Pre-cool during peak solar production (11 AM - 2 PM) to reduce evening consumption."
  }
];

const Appliances = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-foreground">Smart Appliances</h1>
          <Badge variant="outline" className="bg-energy-blue-light text-primary">
            3 active
          </Badge>
        </div>

        <div className="space-y-4">
          {appliances.map((appliance, index) => {
            const Icon = appliance.icon;
            return (
              <Card key={index} className="border-0 shadow-card-soft bg-gradient-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        appliance.status === "active" 
                          ? "bg-success text-success-foreground" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        <Icon size={20} />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        {appliance.name}
                      </CardTitle>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      appliance.status === "active" ? "bg-success" : "bg-muted-foreground"
                    }`} />
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Power</p>
                      <p className="font-semibold text-foreground">{appliance.power}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Daily Usage</p>
                      <p className="font-semibold text-foreground">{appliance.dailyUsage}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Daily Cost</p>
                      <p className="font-semibold text-foreground">{appliance.dailyCost}</p>
                    </div>
                  </div>

                  {appliance.recommendation && (
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Lightbulb size={16} className="mt-0.5 flex-shrink-0" />
                        <p className="text-sm">{appliance.recommendation}</p>
                      </div>
                    </div>
                  )}
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

export default Appliances;