import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, Calendar, Lightbulb, AlertTriangle } from "lucide-react";
import { ConsumptionChart } from "@/components/dashboard/consumption-chart";
import { UsageBreakdown } from "@/components/dashboard/usage-breakdown";

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
            <UsageBreakdown />
          </TabsContent>

          <TabsContent value="tips" className="space-y-4 mt-6">
            <Card className="border-0 shadow-card-soft bg-gradient-card">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-success rounded-lg">
                    <Lightbulb size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Optimize AC Usage</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Pre-cool your home during peak solar hours (11 AM - 2 PM) to reduce evening energy costs by up to 25%.
                    </p>
                    <div className="text-sm text-success font-medium">
                      € Potential savings: €15/month
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-soft bg-gradient-card">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-success rounded-lg">
                    <Lightbulb size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Smart Water Heating</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Schedule water heating during off-peak hours to save on energy costs while maintaining comfort.
                    </p>
                    <div className="text-sm text-success font-medium">
                      € Potential savings: €8/month
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-soft bg-gradient-card">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-success rounded-lg">
                    <Lightbulb size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-primary">Appliance Scheduling</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Run dishwasher and laundry during solar peak hours to maximize your renewable energy usage.
                    </p>
                    <div className="text-sm text-success font-medium">
                      € Potential savings: €12/month
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-4 mt-6">
            <Card className="border-0 shadow-card-soft bg-warning text-warning-foreground">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={20} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">High Usage Alert</h3>
                    <p className="text-sm mb-3">
                      You're using 16% more energy than your neighbors this week. Check your appliance usage for optimization opportunities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Insights;