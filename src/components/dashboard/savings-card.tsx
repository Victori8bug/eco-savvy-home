import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiggyBank } from "lucide-react";

interface SavingsCardProps {
  amount: string;
  period: string;
  currency?: string;
}

export function SavingsCard({ amount, period, currency = "€" }: SavingsCardProps) {
  return (
    <Card className="border-0 shadow-card-soft bg-gradient-card">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <PiggyBank size={20} className="text-success" />
          <CardTitle className="text-base font-semibold text-foreground">
            Monthly Savings
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold text-success">
            {currency}{amount}
          </div>
          <p className="text-sm text-muted-foreground">
            {period}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}