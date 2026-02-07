import { useEffect, useState, useCallback } from 'react';
import { Target, Activity, Brain, Zap, DollarSign, MessageCircle } from 'lucide-react';
import HabitStrengthCard from '../components/HabitStrengthCard';
import SavingsGoalCard from '../components/SavingsGoalCard';
import ActivityFeed from '../components/ActivityFeed';
import InsightCard from '../components/InsightCard';
import ProactiveAlertBanner from '../components/ProactiveAlertBanner';
import { useMontyData } from '@/api/MontyDataProvider';
import { fetchChildInsights, fetchCheckRisk, dismissAlert } from '@/api/client';
import type { ApiCheckRiskResponse } from '@/api/client';
import {
  transformHabitScore,
  transformOverviewGoal,
  decisionsToActivity,
  transformInsights,
} from '@/api/transforms';
import type { Goal, HabitScore, Activity as ActivityType, Insight } from '../mockData';

interface Props {
  familyName?: string;
}

export default function ParentHome({ familyName = 'The Thompsons' }: Props) {
  const { overview, loading } = useMontyData();
  const [insights, setInsights] = useState<Insight[]>([]);
  const [riskData, setRiskData] = useState<ApiCheckRiskResponse | null>(null);

  // Derive data from overview
  const children = overview?.children ?? [];

  // Build family-level habit score (average of children)
  let familyScore: HabitScore | null = null;
  const kidScores: { kidId: string; name: string; initials: string; color: string; score: HabitScore }[] = [];
  const allGoals: Goal[] = [];
  const allActivity: ActivityType[] = [];

  const KID_COLORS = ['bg-teal-500', 'bg-lilac-500', 'bg-coral-500', 'bg-amber-500'];

  if (children.length > 0) {
    let totalScore = 0;
    children.forEach((child, idx) => {
      const hs = transformHabitScore(child.habit_score);
      totalScore += hs.score;
      kidScores.push({
        kidId: child.id,
        name: child.name,
        initials: child.name.charAt(0).toUpperCase(),
        color: KID_COLORS[idx % KID_COLORS.length],
        score: hs,
      });

      child.goals.forEach((g) => {
        allGoals.push(transformOverviewGoal(g, child.id, child.name));
      });

      const activities = decisionsToActivity(child.recent_decisions, child.id, child.name);
      allActivity.push(...activities);
    });

    familyScore = {
      score: Math.round(totalScore / children.length),
      label: totalScore / children.length >= 70 ? 'Excellent habits!' : 'Building momentum',
      trend: '',
      components: {
        savings_streak_days: 0,
        impulse_resistance_rate: 0,
        goal_progress_velocity: 0,
        spending_consistency: 0,
        implementation_intentions_completed: 0,
      },
    };
  }

  // Fetch insights + risk data for first child
  useEffect(() => {
    if (children.length === 0) return;
    const child = children[0];
    fetchChildInsights(child.id)
      .then((data) => {
        setInsights(transformInsights(data.insights, child.id, child.name));
      })
      .catch(() => {});
    fetchCheckRisk(child.id)
      .then(setRiskData)
      .catch(() => {});
  }, [children.length > 0 ? children[0].id : '']);

  const handleDismissAlert = useCallback((alertId: string) => {
    dismissAlert(alertId).catch(() => {});
    setRiskData((prev) => prev ? {
      ...prev,
      active_alerts: prev.active_alerts.filter((a) => a.alert_id !== alertId),
    } : prev);
  }, []);

  if (loading) {
    return (
      <div className="space-y-6 pb-24">
        <div className="h-8 w-48 animate-pulse rounded bg-slate-200" />
        <div className="h-32 animate-pulse rounded-2xl bg-slate-200" />
        <div className="h-24 animate-pulse rounded-2xl bg-slate-200" />
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-24">
      {/* Header */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Family Dashboard</p>
        <h1 className="font-display text-xl font-semibold text-ink sm:text-2xl">{familyName}</h1>
      </div>

      {/* Proactive Alerts */}
      {riskData && (riskData.predictions.length > 0 || riskData.active_alerts.length > 0) && (
        <ProactiveAlertBanner
          predictions={riskData.predictions}
          activeAlerts={riskData.active_alerts}
          onDismissAlert={handleDismissAlert}
          variant="parent"
        />
      )}

      {/* Family Habit Strength */}
      {familyScore && <HabitStrengthCard data={familyScore} title="Family Habit Strength" />}

      {/* Individual Kid Scores */}
      {kidScores.length > 0 && (
        <div className="bg-white border border-slate-200 shadow-card rounded-2xl p-5">
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">
            Individual Scores
          </p>
          <div className="space-y-3">
            {kidScores.map((kid) => (
              <div key={kid.kidId} className="flex items-center justify-between rounded-xl border border-slate-100 bg-mist px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${kid.color} text-xs font-semibold text-white`}>
                    {kid.initials}
                  </div>
                  <span className="text-sm font-medium text-ink">{kid.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono text-lg font-bold"
                    style={{ color: kid.score.score >= 70 ? '#11A39A' : kid.score.score >= 40 ? '#f59e0b' : '#ef4444' }}
                  >
                    {kid.score.score}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">{kid.score.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active Goals */}
      {allGoals.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-4 w-4 text-slate-400" />
            <h2 className="font-display text-lg font-semibold text-ink">Active Goals</h2>
            <span className="ml-1 rounded-full bg-mist border border-slate-200 px-2 py-0.5 font-mono text-[10px] text-slate-500">
              {allGoals.length}
            </span>
          </div>
          <div className="space-y-3">
            {allGoals.map((goal) => (
              <SavingsGoalCard key={goal.id} goal={goal} showChild />
            ))}
          </div>
        </div>
      )}

      {/* Recent Activity */}
      {allActivity.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Activity className="h-4 w-4 text-slate-400" />
            <h2 className="font-display text-lg font-semibold text-ink">Recent Activity</h2>
          </div>
          <ActivityFeed activities={allActivity} maxItems={4} />
        </div>
      )}

      {/* AI Insights Preview */}
      {insights.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-4 w-4 text-slate-400" />
            <h2 className="font-display text-lg font-semibold text-ink">AI Insights</h2>
          </div>
          <div className="space-y-3">
            {insights.slice(0, 2).map((insight, i) => (
              <InsightCard key={insight.id} insight={insight} index={i} />
            ))}
          </div>
        </div>
      )}

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
