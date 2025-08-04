import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Calendar, TrendingDown } from "lucide-react";
const data = [
  { month: "Oct", value: 420, height: 80 },
  { month: "Nov", value: 380, height: 60 },
  { month: "Dec", value: 350, height: 45 },
];
export function ConsumptionChart() {
  return (
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
          <div className="h-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false}
                  fontSize={12}
                  className="fill-muted-foreground"
                />
                <YAxis hide />
                <Bar 
                  dataKey="value" 
                  fill="hsl(var(--warning))" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
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
  );
}
