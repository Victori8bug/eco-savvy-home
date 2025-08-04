import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, ReferenceLine } from "recharts";
import { Calendar, TrendingDown } from "lucide-react";

const data = [
  { month: "Oct", value: 420, height: 80 },
  { month: "Nov", value: 380, height: 60 },
  { month: "Dec", value: 350, height: 45 },
];

export function ConsumptionChart() {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
      <Card className="border-0 shadow-lg bg-white w-full max-w-md">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Calendar size={20} className="text-blue-600" />
            <CardTitle className="text-base font-semibold">3-Month Consumption Trend</CardTitle>
          </div>
          <p className="text-sm text-gray-600">October - December 2024</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-48 relative">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 15, right: 15, left: 15, bottom: 30 }}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false}
                    fontSize={12}
                    className="fill-gray-600"
                  />
                  <YAxis hide />
                  
                  <Bar 
                    dataKey="value" 
                    fill="#f97316"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
              
              {/* Value labels underneath bars */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-around px-4">
                {data.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-sm font-bold text-gray-800">{item.value} kWh</div>
                    {index > 0 && (
                      <div className="text-xs text-green-600 font-medium">
                        -{data[0].value - item.value} vs Oct
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            

            
            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center mb-1">
                  <TrendingDown size={16} className="text-green-600" />
                  <span className="text-lg font-bold text-green-600">-18%</span>
                </div>
                <p className="text-xs text-gray-600">Consumption reduction</p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-green-600 mb-1">€63</div>
                <p className="text-xs text-gray-600">Total savings</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
