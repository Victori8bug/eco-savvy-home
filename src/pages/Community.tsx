import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, Trophy, Flame, Target } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-6">
          <Users size={24} className="text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Community Impact</h1>
        </div>

        <div className="space-y-6">
          {/* Neighborhood Ranking */}
          <Card className="border-0 shadow-card-soft bg-gradient-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold"> Your Neighborhood</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <Badge className="bg-success text-success-foreground mb-4">
                  #23 of 156
                </Badge>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Your daily usage</span>
                  <span className="font-semibold">18.5 kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Neighborhood average</span>
                  <span className="font-semibold">22.1 kWh</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="text-sm font-medium">Difference</span>
                  <span className="font-bold text-success">-3.6 kWh below average</span>
                </div>
              </div>

              <div className="bg-success p-4 rounded-lg text-success-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy size={16} />
                  <span className="font-semibold">Outstanding performance!</span>
                </div>
                <p className="text-sm text-success-foreground/90">
                  You're using 16% less energy than your neighbors.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Challenge */}
          <Card className="border-0 shadow-card-soft bg-gradient-card">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Target size={20} className="text-primary" />
                <CardTitle className="text-lg font-semibold">Monthly Challenge</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Progress to goal</span>
                  <span className="font-bold text-primary">71%</span>
                </div>
                <Progress value={71} className="h-3 bg-muted" />
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">€32 saved</span>
                <span className="text-muted-foreground">Goal: €45</span>
              </div>

              <div className="flex items-center gap-2 text-warning">
                <Flame size={16} />
                <span className="font-semibold">5 day streak</span>
                <span className="text-sm text-muted-foreground">of beating your daily goal!</span>
              </div>
            </CardContent>
          </Card>

          {/* Community Challenge */}
          <Card className="border-0 shadow-card-soft bg-gradient-primary text-primary-foreground">
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">Community Challenge: "Solar Superheroes"</h3>
              <p className="text-sm text-primary-foreground/90 mb-4">
                Join 247 neighbors competing to maximize solar self-consumption this month.
              </p>
              <Button 
                variant="secondary" 
                className="w-full bg-white text-primary hover:bg-white/90"
              >
                Join Challenge
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Community;
