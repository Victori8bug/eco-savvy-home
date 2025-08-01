import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, Calendar, Lightbulb, AlertTriangle, Euro } from "lucide-react";
import { ConsumptionChart } from "@/components/dashboard/consumption-chart";

const usageBreakdown = [
  { name: "Air Conditioning", value: 35, color: "hsl(var(--warning))" },
  { name: "Water Heating", value: 25, color: "hsl(var(--primary))" },
  { name: "Appliances", value: 20, color: "hsl(var(--success))" },
  { name: "Lighting", value: 12, color: "hsl(var(--primary))" },
  { name: "Other", value: 8, color: "hsl(var(--muted-foreground))" },
];

const tips = [
  {
    title: "Optimize AC Usage",
    description: "Pre-cool your home during peak solar hours (11 AM - 2 PM) to reduce evening energy costs by up to 25%.",
    savings: "€15/month"
  },
  {
    title: "Smart Water Heating", 
    description: "Schedule water heating during off-peak hours to save on energy costs while maintaining comfort.",
    savings: "€8/month"
  },
  {
    title: "Appliance Scheduling",
    description: "Run dishwasher and laundry during solar peak hours to maximize your renewable energy usage.",
    savings: "€12/month"
  }
];

const Insights = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Energy Insights</h1>

        <Tabs defaultValue="3months" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="3months">3 Months</TabsTrigger>
            <TabsTrigger value="6months">6 Months</TabsTrigger>
            <TabsTrigger value="tips">Tips</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="3months" className="space-y-4 mt-6">
            <ConsumptionChart />
            
            {/* Usage Breakdown */}
            <Card className="energy-card p-4">
              <h3 className="font-semibold text-energy-text mb-4">Usage Breakdown</h3>
              
              {/* Simple Usage Visualization */}
              <div className="h-48 mb-4 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full bg-muted/30"></div>
                  <div className="absolute inset-2 rounded-full flex items-center justify-center bg-background">
                    <span className="text-sm font-bold text-energy-text">Usage</span>
                  </div>
                  {/* Simplified ring segments */}
                  <div className="absolute inset-0 rounded-full border-8 border-orange-accent/60" 
                       style={{ clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)' }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-primary/60" 
                       style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }}></div>
                  <div className="absolute inset-0 rounded-full border-8 border-green-energy/60" 
                       style={{ clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)' }}></div>
                </div>
              </div>

              <div className="space-y-2">
                {usageBreakdown.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-foreground">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium text-energy-text">{item.value}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="6months" className="space-y-6">
            <Card className="energy-card p-4">
              <h3 className="font-semibold text-energy-text mb-4">6-Month Analysis</h3>
              <p className="text-muted-foreground">Extended consumption analysis coming soon...</p>
            </Card>
          </TabsContent>

          <TabsContent value="tips" className="space-y-4">
            {tips.map((tip, index) => (
              <Card key={index} className="energy-card p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-energy/10 rounded-lg">
                    <TrendingDown className="w-4 h-4 text-green-energy" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-energy-text mb-2">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {tip.description}
                    </p>
                    <div className="flex items-center gap-1">
                      <Euro className="w-4 h-4 text-green-energy" />
                      <span className="text-sm font-medium text-green-energy">
                        Potential savings: {tip.savings}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card className="energy-card p-4">
              <h3 className="font-semibold text-energy-text mb-4">Energy Alerts</h3>
              <p className="text-muted-foreground">No active alerts at this time.</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Insights;