import { Flame, PiggyBank, Award, ArrowUpRight } from 'lucide-react';
import MontyCompanion from '../components/MontyCompanion';
import SavingsGoalCard from '../components/SavingsGoalCard';
import { MOCK_GOALS, MOCK_STREAK, MOCK_RECENT_WINS } from '../mockData';

interface Props {
  kidName?: string;
  kidId?: string;
}

const WIN_ICON_MAP: Record<string, React.ReactNode> = {
  '\u{1F4B0}': <PiggyBank className="h-4 w-4 text-lilac-500" />,
  '\u{1F389}': <Award className="h-4 w-4 text-lilac-500" />,
  '\u{1F525}': <Flame className="h-4 w-4 text-lilac-500" />,
};

function getGreeting(name: string): string {
  const hour = new Date().getHours();
  if (hour < 12) return `Good morning, ${name}`;
  if (hour < 18) return `Hi, ${name}`;
  if (hour < 22) return `Good evening, ${name}`;
  return `Night owl, ${name}`;
}

export default function KidHome({ kidName = 'Emma', kidId = 'kid-1' }: Props) {
  const goals = MOCK_GOALS.filter((g) => g.childId === kidId);
  const streak = MOCK_STREAK;

  const montyState =
    streak.currentDays >= 14 ? 'excited' : streak.currentDays >= 7 ? 'happy' : 'encouraging';
  const montyMessage =
    streak.currentDays >= 14
      ? `${streak.currentDays} day streak! You're incredible!`
      : streak.currentDays >= 7
        ? "Great job today! I'm so proud of you!"
        : 'Keep going! Small steps count!';

  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="space-y-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-xl font-semibold text-ink">
            {getGreeting(kidName)}
          </h1>
          <p className="mt-0.5 text-xs text-slate-600">{dateStr}</p>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-lilac-300/40 bg-lilac-500/10 px-3 py-1.5">
          <Flame className="h-4 w-4 text-lilac-500" />
          <span className="font-mono text-sm font-semibold text-lilac-500">
            {streak.currentDays}
          </span>
        </div>
      </div>

      {/* Monty Companion */}
      <MontyCompanion
        state={montyState as 'happy' | 'excited' | 'encouraging'}
        streakDays={streak.currentDays}
        message={montyMessage}
      />

      {/* Goals */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink">Your Goals</h2>
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
            {goals.length} active
          </span>
        </div>
        <div className="space-y-3">
          {goals.map((goal) => (
            <SavingsGoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </div>

      {/* Recent Wins */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
        <h2 className="font-display text-lg font-semibold text-ink mb-4">Recent Wins</h2>
        <div className="space-y-3">
          {MOCK_RECENT_WINS.map((win) => (
            <div key={win.id} className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lilac-500/10">
                {WIN_ICON_MAP[win.icon] || <ArrowUpRight className="h-4 w-4 text-lilac-500" />}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-ink">{win.text}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                  {win.timestamp}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-lilac-500/10 px-2.5 py-0.5 font-mono text-xs font-semibold text-lilac-500">
                {win.reward}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
