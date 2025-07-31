import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

interface BalanceItem {
  label: string;
  value: string;
  color: "green" | "orange" | "blue";
}

interface BalanceCardProps {
  items: BalanceItem[];
  netBalance: string;
  status: "surplus" | "deficit";
}

export function BalanceCard({ items, netBalance, status }: BalanceCardProps) {
  return (
    <Card className="border-0 shadow-card-soft bg-gradient-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-foreground">
            Today's Balance
          </CardTitle>
          <Badge 
            variant={status === "surplus" ? "default" : "secondary"}
            className={status === "surplus" ? "bg-success text-success-foreground" : ""}
          >
            {status === "surplus" ? "Surplus" : "Deficit"}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">{item.label}</span>
            <span className={`text-sm font-semibold ${
              item.color === "green" ? "text-success" :
              item.color === "orange" ? "text-warning" :
              "text-primary"
            }`}>
              {item.value}
            </span>
          </div>
        ))}
        
        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <TrendingUp size={16} className="text-success" />
              <span className="text-sm font-medium text-foreground">Net Balance</span>
            </div>
            <span className="text-lg font-bold text-success">{netBalance}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}