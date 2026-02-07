import { Target, Activity, Brain, Zap, DollarSign, MessageCircle } from 'lucide-react';
import HabitStrengthCard from '../components/HabitStrengthCard';
import SavingsGoalCard from '../components/SavingsGoalCard';
import ActivityFeed from '../components/ActivityFeed';
import InsightCard from '../components/InsightCard';
import {
  MOCK_HABIT_SCORES,
  MOCK_GOALS,
  MOCK_ACTIVITY,
  MOCK_INSIGHTS,
} from '../mockData';

interface Props {
  familyName?: string;
}

const KID_META: Record<string, { name: string; initials: string; color: string }> = {
  'kid-1': { name: 'Emma', initials: 'E', color: 'bg-teal-500' },
  'kid-2': { name: 'Lucas', initials: 'L', color: 'bg-lilac-500' },
};

export default function ParentHome({ familyName = 'The Johnsons' }: Props) {
  const familyScore = MOCK_HABIT_SCORES.family;
  const kidScores = Object.entries(MOCK_HABIT_SCORES).filter(([k]) => k !== 'family');

  return (
    <div className="space-y-6 pb-24">
      {/* Header */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Family Dashboard</p>
        <h1 className="font-display text-xl font-semibold text-ink sm:text-2xl">{familyName}</h1>
      </div>

      {/* Family Habit Strength */}
      <HabitStrengthCard data={familyScore} title="Family Habit Strength" />

      {/* Individual Kid Scores */}
      <div className="bg-white border border-slate-200 shadow-card rounded-2xl p-5">
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">
          Individual Scores
        </p>
        <div className="space-y-3">
          {kidScores.map(([kidId, score]) => {
            const kid = KID_META[kidId] ?? { name: kidId, initials: '?', color: 'bg-slate-400' };
            return (
              <div key={kidId} className="flex items-center justify-between rounded-xl border border-slate-100 bg-mist px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${kid.color} text-xs font-semibold text-white`}>
                    {kid.initials}
                  </div>
                  <span className="text-sm font-medium text-ink">{kid.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-lg font-bold"
                    style={{ color: score.score >= 70 ? '#11A39A' : score.score >= 40 ? '#f59e0b' : '#ef4444' }}
                  >
                    {score.score}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{score.trend}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Goals */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Target className="h-4 w-4 text-slate-400" />
          <h2 className="font-display text-lg font-semibold text-ink">
            Active Goals
          </h2>
          <span className="ml-1 rounded-full bg-mist border border-slate-200 px-2 py-0.5 font-mono text-[10px] text-slate-500">
            {MOCK_GOALS.length}
          </span>
        </div>
        <div className="space-y-3">
          {MOCK_GOALS.map((goal) => (
            <SavingsGoalCard key={goal.id} goal={goal} showChild />
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Activity className="h-4 w-4 text-slate-400" />
          <h2 className="font-display text-lg font-semibold text-ink">Recent Activity</h2>
        </div>
        <ActivityFeed activities={MOCK_ACTIVITY} maxItems={4} />
      </div>

      {/* AI Insights Preview */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-4 w-4 text-slate-400" />
          <h2 className="font-display text-lg font-semibold text-ink">AI Insights</h2>
        </div>
        <div className="space-y-3">
          {MOCK_INSIGHTS.slice(0, 2).map((insight, i) => (
            <InsightCard key={insight.id} insight={insight} index={i} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Zap className="h-4 w-4 text-slate-400" />
          <h2 className="font-display text-lg font-semibold text-ink">Quick Actions</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-mist shadow-lift transition hover:-translate-y-0.5 hover:shadow-card">
            <DollarSign className="h-4 w-4" />
            Send Bonus
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition hover:border-ink/40">
            <MessageCircle className="h-4 w-4" />
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
