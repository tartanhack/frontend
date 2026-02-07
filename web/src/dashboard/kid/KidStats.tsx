import { Flame, Wallet, Trophy, Target, Shield } from 'lucide-react';
import StatCard from '../components/StatCard';
import StreakCalendar from '../components/StreakCalendar';
import BadgeGrid from '../components/BadgeGrid';
import { MOCK_STREAK, MOCK_BADGES } from '../mockData';

interface Props {
  kidId?: string;
}

const PERSONAL_RECORDS = [
  {
    icon: <Flame className="h-4 w-4 text-lilac-500" />,
    label: 'Longest streak',
    value: '20 days',
    detail: 'Dec 2025',
  },
  {
    icon: <Wallet className="h-4 w-4 text-lilac-500" />,
    label: 'Most saved/week',
    value: '$45',
    detail: 'Jan 2026',
  },
  {
    icon: <Target className="h-4 w-4 text-lilac-500" />,
    label: 'Goals completed',
    value: '2 goals',
    detail: 'total',
  },
  {
    icon: <Shield className="h-4 w-4 text-lilac-500" />,
    label: 'Best impulse resist',
    value: '10 in a row',
    detail: '',
  },
];

export default function KidStats({ kidId: _kidId = 'kid-1' }: Props) {
  const streak = MOCK_STREAK;

  return (
    <div className="space-y-6 pb-24">
      {/* Header */}
      <div>
        <h1 className="font-display text-xl font-semibold text-ink">Your Stats</h1>
        <p className="mt-0.5 text-xs text-slate-600">Week of Feb 1&ndash;7</p>
      </div>

      {/* Week Summary */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard
          value="$23"
          label="Saved"
          icon={<Wallet className="h-5 w-5 text-lilac-500" />}
          index={0}
        />
        <StatCard
          value="4"
          label="Wins"
          icon={<Trophy className="h-5 w-5 text-lilac-500" />}
          index={1}
        />
        <StatCard
          value={`${streak.currentDays}`}
          label="Day Streak"
          icon={<Flame className="h-5 w-5 text-lilac-500" />}
          index={2}
        />
        <StatCard
          value="2"
          label="Active Goals"
          icon={<Target className="h-5 w-5 text-lilac-500" />}
          index={3}
        />
      </div>

      {/* Streak Calendar */}
      <StreakCalendar
        currentDays={streak.currentDays}
        longestDays={streak.longestDays}
        calendar={streak.calendar}
      />

      {/* Badges */}
      <BadgeGrid badges={MOCK_BADGES} />

      {/* Personal Records */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
        <h2 className="font-display text-lg font-semibold text-ink mb-4">Personal Records</h2>
        <div className="space-y-3">
          {PERSONAL_RECORDS.map((record) => (
            <div key={record.label} className="flex items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lilac-500/10">
                {record.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-ink">{record.label}</p>
                {record.detail && (
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                    {record.detail}
                  </p>
                )}
              </div>
              <span className="font-mono text-sm font-semibold text-ink">{record.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
