import { useState } from 'react';
import { Users } from 'lucide-react';
import HabitStrengthCard from '../components/HabitStrengthCard';
import SavingsGoalCard from '../components/SavingsGoalCard';
import SpendingCategoryChart from '../components/SpendingCategoryChart';
import AgentMemoryLog from '../components/AgentMemoryLog';
import DecisionHistory from '../components/DecisionHistory';
import {
  MOCK_HABIT_SCORES,
  MOCK_GOALS,
  MOCK_SPENDING_CATEGORIES,
  MOCK_MEMORIES,
  MOCK_DECISIONS,
} from '../mockData';

const KIDS = [
  { id: 'kid-1', name: 'Emma', age: 10, initials: 'E', color: 'bg-teal-500' },
  { id: 'kid-2', name: 'Lucas', age: 7, initials: 'L', color: 'bg-lilac-500' },
];

export default function ParentFamily() {
  const [selectedKid, setSelectedKid] = useState(KIDS[0]);

  const score = MOCK_HABIT_SCORES[selectedKid.id];
  const goals = MOCK_GOALS.filter((g) => g.childId === selectedKid.id);
  const memories = MOCK_MEMORIES.filter((m) => m.childId === selectedKid.id);
  const decisions = MOCK_DECISIONS.filter((d) => d.childId === selectedKid.id);

  return (
    <div className="space-y-6 pb-24">
      {/* Header + Kid Selector */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Users className="h-4 w-4 text-slate-400" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Family Member</p>
        </div>
        <h1 className="font-display text-xl font-semibold text-ink sm:text-2xl mb-4">
          {selectedKid.name}'s Dashboard
        </h1>
        <div className="flex gap-2">
          {KIDS.map((kid) => (
            <button
              key={kid.id}
              onClick={() => setSelectedKid(kid)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                kid.id === selectedKid.id
                  ? 'bg-ink text-mist shadow-lift'
                  : 'border border-ink/20 text-ink hover:border-ink/40'
              }`}
            >
              <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white ${kid.color}`}>
                {kid.initials}
              </span>
              {kid.name}
              <span className="font-mono text-[10px] opacity-60">({kid.age})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Habit Score */}
      {score && (
        <HabitStrengthCard
          data={score}
          title={`${selectedKid.name}'s Habit Strength`}
        />
      )}

      {/* Goals */}
      {goals.length > 0 && (
        <div>
          <h2 className="font-display text-lg font-semibold text-ink mb-4">Goals Progress</h2>
          <div className="space-y-3">
            {goals.map((goal) => (
              <SavingsGoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        </div>
      )}

      {/* Spending Patterns */}
      <SpendingCategoryChart categories={MOCK_SPENDING_CATEGORIES} />

      {/* Agent Memory Log */}
      {memories.length > 0 && <AgentMemoryLog memories={memories} />}

      {/* Decision History */}
      {decisions.length > 0 && <DecisionHistory decisions={decisions} />}
    </div>
  );
}
