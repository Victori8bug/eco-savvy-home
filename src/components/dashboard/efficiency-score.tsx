import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp } from "lucide-react";

interface EfficiencyScoreProps {
  score: number;
  maxScore: number;
  feedback: string;
}

export function EfficiencyScore({ score, maxScore, feedback }: EfficiencyScoreProps) {
  const percentage = (score / maxScore) * 100;
  const isGoodScore = percentage >= 70;

  return (
    <Card className="border-0 shadow-card-soft bg-gradient-card">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <TrendingUp size={20} className="text-primary" />
          <CardTitle className="text-base font-semibold text-foreground">
            Energy Efficiency Score
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-foreground mb-1">
            {score}/{maxScore}
          </div>
          <div className="relative">
            <Progress 
              value={percentage} 
              className="h-3 bg-muted"
            />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground text-center">
          {feedback}
        </p>
      </CardContent>
    </Card>
  );
}