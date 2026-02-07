import { PiggyBank, Shield, Award, Pause, Target, Flame, BarChart3 } from 'lucide-react';
import StatCard from '../components/StatCard';
import WeeklyTrendChart from '../components/WeeklyTrendChart';
import DecisionFlowchart from '../components/DecisionFlowchart';
import {
  MOCK_STATS_OVERVIEW,
  MOCK_HABIT_TREND,
  MOCK_WEEKLY_SPENDING,
  MOCK_PIPELINE,
} from '../mockData';

const STAT_ICONS: Record<string, React.ReactNode> = {
  'Total Saved': <PiggyBank className="h-4 w-4 text-teal-500" />,
  'Impulse Resist': <Shield className="h-4 w-4 text-coral-500" />,
  'Badges Earned': <Award className="h-4 w-4 text-lilac-500" />,
  'Impulse Pauses': <Pause className="h-4 w-4 text-teal-700" />,
  'Active Goals': <Target className="h-4 w-4 text-coral-700" />,
  'Streak Rate': <Flame className="h-4 w-4 text-teal-500" />,
};

export default function ParentStats() {
  const s = MOCK_STATS_OVERVIEW;

  const stats = [
    { value: `$${s.totalSaved}`, label: 'Total Saved', delta: s.totalSavedDelta },
    { value: `${s.impulseResist}%`, label: 'Impulse Resist', delta: s.impulseResistDelta },
    { value: String(s.badgesEarned), label: 'Badges Earned', delta: s.badgesEarnedDelta },
    { value: String(s.impulsePauses), label: 'Impulse Pauses', delta: s.impulsePausesDelta },
    { value: String(s.activeGoals), label: 'Active Goals', delta: s.activeGoalsDelta },
    { value: `${s.streakRate}%`, label: 'Streak Rate', delta: s.streakRateDelta },
  ];

  return (
    <div className="space-y-6 pb-24">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 className="h-4 w-4 text-slate-400" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Last 30 days</p>
        </div>
        <h1 className="font-display text-xl font-semibold text-ink sm:text-2xl">Family Statistics</h1>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
            delta={stat.delta}
            icon={STAT_ICONS[stat.label]}
            index={index}
          />
        ))}
      </div>

      {/* Habit Strength Trend */}
      <WeeklyTrendChart
        data={MOCK_HABIT_TREND}
        lines={[
          { key: 'family', color: '#11A39A', name: 'Family' },
          { key: 'emma', color: '#7E6AE6', name: 'Emma' },
          { key: 'lucas', color: '#E07A5F', name: 'Lucas' },
        ]}
        title="Habit Strength Over Time"
      />

      {/* Weekly Spending Trend */}
      <WeeklyTrendChart
        data={MOCK_WEEKLY_SPENDING}
        lines={[{ key: 'amount', color: '#D1654B', name: 'Spending' }]}
        title="Weekly Spending Trend"
        formatValue={(v) => `$${v}`}
      />

      {/* Decision Pipeline Flowchart */}
      <DecisionFlowchart data={MOCK_PIPELINE} />
    </div>
  );
}
