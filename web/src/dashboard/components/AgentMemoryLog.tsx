import { BarChart2, MessageCircle, Target, Brain, BellOff } from 'lucide-react';
import type { Memory } from '../mockData';

const TYPE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  spending_pattern: BarChart2,
  user_response: MessageCircle,
  goal_update: Target,
  habit_observation: Brain,
};

const TYPE_LABELS: Record<string, string> = {
  spending_pattern: 'Spending Pattern',
  user_response: 'User Response',
  goal_update: 'Goal Update',
  habit_observation: 'Habit Observation',
};

interface Props {
  memories: Memory[];
}

export default function AgentMemoryLog({ memories }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-card border border-slate-200 p-5">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-4 h-4 text-lilac-500" />
        <h2 className="font-display text-ink text-base font-semibold">What Monty Learned</h2>
      </div>
      <div className="space-y-2">
        {memories.map((m) => {
          const IconComponent = TYPE_ICONS[m.type] || Brain;
          return (
            <div key={m.id} className="flex items-start gap-3 p-3 bg-slate-50/60 border border-slate-100 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                <IconComponent className="w-4 h-4 text-lilac-500" />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-0.5">{TYPE_LABELS[m.type] || m.type}</p>
                <p className="text-sm text-slate-600 leading-relaxed">&ldquo;{m.content}&rdquo;</p>
                <p className="text-xs text-slate-400 mt-1.5">
                  {new Date(m.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                  {m.suppressAlerts && (
                    <span className="ml-2 inline-flex items-center gap-1 text-coral-500 bg-coral-500/10 px-1.5 py-0.5 rounded-full text-[10px]">
                      <BellOff className="w-3 h-3" /> Alerts suppressed
                    </span>
                  )}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
