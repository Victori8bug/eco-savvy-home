import { WelcomeHeader } from "@/components/dashboard/welcome-header";
import { EnergyCard } from "@/components/dashboard/energy-card";
import { BalanceCard } from "@/components/dashboard/balance-card";
import { EfficiencyScore } from "@/components/dashboard/efficiency-score";
import { SavingsCard } from "@/components/dashboard/savings-card";
import { BottomNav } from "@/components/ui/bottom-nav";
import { Zap, Sun, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const balanceItems = [
    { label: "Production", value: "28.5 kWh", color: "green" as const },
    { label: "Consumption", value: "19.2 kWh", color: "orange" as const },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto px-4 py-6">
        <WelcomeHeader
          userName="Porto"
          subtitle="Take control of your energy future"
          notificationCount={3}
        />
        
        <div className="space-y-6">
          {/* Current Stats */}
          <div className="grid grid-cols-2 gap-4">
            <EnergyCard
              title="Current Usage"
              value="2.3"
              unit="kW"
              subtitle="Right now"
              icon={Zap}
              variant="default"
            />
            <EnergyCard
              title="Solar Production"
              value="28.5"
              unit="kWh"
              subtitle="Today"
              icon={Sun}
              variant="success"
            />
          </div>

          {/* Balance Overview */}
          <BalanceCard
            items={balanceItems}
            netBalance="+9.3 kWh"
            status="surplus"
          />

          {/* Efficiency Score */}
          <EfficiencyScore
            score={78}
            maxScore={100}
            feedback="Good! Room for improvement"
          />

          {/* Monthly Savings */}
          <SavingsCard
            amount="47.30"
            period="Dec 1, 2024 - Dec 31, 2024"
          />
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Dashboard;
