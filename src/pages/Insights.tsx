import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingDown, Calendar, Lightbulb, AlertTriangle } from "lucide-react";

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
            <Card className="border-0 shadow-card-soft bg-gradient-card">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-primary" />
                  <CardTitle className="text-base font-semibold">3-Month Consumption Trend</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">October - December 2024</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="h-20 bg-warning rounded-lg mb-2 flex items-end justify-center p-2">
                        <div className="w-8 bg-warning/60 rounded-t" style={{ height: '80%' }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground">Oct</p>
                    </div>
                    <div className="text-center">
                      <div className="h-20 bg-success rounded-lg mb-2 flex items-end justify-center p-2">
                        <div className="w-8 bg-success/60 rounded-t" style={{ height: '60%' }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground">Nov</p>
                    </div>
                    <div className="text-center">
                      <div className="h-20 bg-success rounded-lg mb-2 flex items-end justify-center p-2">
                        <div className="w-8 bg-success/60 rounded-t" style={{ height: '45%' }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground">Dec</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="flex items-center gap-1 justify-center mb-1">
                        <TrendingDown size={16} className="text-success" />
                        <span className="text-lg font-bold text-success">-18%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Consumption reduction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-success mb-1">€63</div>
                      <p className="text-xs text-muted-foreground">Total savings</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-soft bg-gradient-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Usage Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-warning"></div>
                      <span className="text-sm">Air Conditioning: 35%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-sm">Water Heating: 25%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                      <span className="text-sm">Appliances: 20%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-sm">Lighting: 12%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tips" className="space-y-4 mt-6">
            <Card className="border-0 shadow-card-soft bg-gradient-success text-white">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Lightbulb size={20} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Peak Rate Alert</h3>
                    <p className="text-sm text-white/90 mb-3">
                      Electricity rates are 40% higher right now. Consider postponing high-energy activities like dishwashing or laundry until after 9 PM.
                    </p>
                    <div className="flex gap-4 text-xs">
                      <span>€3.20 Monthly savings</span>
                      <span>1.5kg CO₂ reduction</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-soft bg-gradient-card">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary rounded-lg">
                    <Lightbulb size={16} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Solar Optimization Opportunity</h3>
                    <Badge className="mb-2 bg-primary text-primary-foreground">medium</Badge>
                    <p className="text-sm text-muted-foreground mb-3">
                      Your solar panels are producing excess energy! Perfect time to pre-cool your home or run energy-intensive appliances.
                    </p>
                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span>€1.80 Monthly savings</span>
                      <span>+15% Efficiency</span>
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