import type { ReactNode } from 'react';
import type { OnboardingState } from '../state';
import { NumberStepper } from '@/components/NumberStepper';
import { RangeField } from '@/components/RangeField';
import { TextField } from '@/components/TextField';
import { ChildIcon, FamilyIcon, ParentIcon, SparkIcon } from '@/assets/icons';

export type StepDefinition = {
  id: string;
  title: string;
  subtitle?: string;
  accent?: 'teal' | 'coral' | 'lilac';
  canContinue: (state: OnboardingState) => boolean;
  render: (state: OnboardingState, actions: StepActions) => ReactNode;
};

export type StepActions = {
  setFamilyName: (value: string) => void;
  setParentName: (value: string) => void;
  setKidCount: (value: number) => void;
  updateKid: (index: number, kid: Partial<OnboardingState['kids'][number]>) => void;
  setAccountLinkChoice: (value: OnboardingState['accountLinkChoice']) => void;
  complete: () => void;
};

const introStep: StepDefinition = {
  id: 'intro',
  title: 'Welcome to your family setup',
  subtitle: 'A quick setup to personalize the parent dashboard. You can fill in details later.',
  accent: 'teal',
  canContinue: () => true,
  render: () => (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-[1.2fr_1fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
        <h3 className="font-display text-xl text-ink sm:text-2xl">A calm, confident start.</h3>
        <p className="mt-3 text-sm text-slate-600">
          Keep this under a minute. Start with the basics now and refine goals, avatars, and account connections later.
        </p>
        <div className="mt-4 flex items-center gap-3 sm:mt-5">
          <div className="h-10 w-10 rounded-full bg-teal-500/20 p-2">
            <FamilyIcon />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Designed for parents</p>
            <p className="text-xs text-slate-500">Insightful, not overwhelming.</p>
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-ink p-5 text-mist shadow-card sm:p-6">
        <SparkIcon className="h-10 w-10" />
        <h3 className="mt-4 font-display text-xl sm:text-2xl">Demo-ready</h3>
        <p className="mt-3 text-sm text-mist/80">Every screen works in demo mode. Connect real accounts whenever you want.</p>
      </div>
    </div>
  )
};

const familyBasicsStep: StepDefinition = {
  id: 'family-basics',
  title: 'Family basics',
  subtitle: 'We just need a household name and how many kids we are setting up.',
  accent: 'coral',
  canContinue: (state) =>
    state.familyName.trim().length >= 2 && state.parentName.trim().length >= 2 && Boolean(state.kidCount),
  render: (state, actions) => (
    <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
        <TextField
          label="Family name"
          placeholder="The Ramirez Family"
          value={state.familyName}
          onChange={actions.setFamilyName}
        />
        <TextField label="Parent name" placeholder="Alex" value={state.parentName} onChange={actions.setParentName} />
        <p className="text-xs text-slate-500">
          These show up in reminders and weekly summaries. You can edit them anytime.
        </p>
      </div>
      <NumberStepper
        label="Number of kids"
        value={state.kidCount ?? 1}
        min={1}
        max={6}
        onChange={(value) => actions.setKidCount(value)}
      />
    </div>
  )
};

const kidProfilesStep: StepDefinition = {
  id: 'kid-profiles',
  title: 'Quick kid profiles',
  subtitle: 'Add names and ages now. Goals and badges can wait.',
  accent: 'lilac',
  canContinue: () => true,
  render: (state, actions) => (
    <div className="grid gap-4">
      {state.kids.map((kid, index) => (
        <div key={kid.id} className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-ink">Kid {index + 1}</p>
            <span className="text-xs text-slate-400">Optional details</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              label="Name"
              placeholder="Jamie"
              value={kid.name}
              onChange={(value) => actions.updateKid(index, { name: value })}
            />
            <RangeField
              label="Age"
              min={5}
              max={17}
              step={1}
              value={kid.age ?? 10}
              formatValue={(value) => `${value} yrs`}
              onChange={(value) => actions.updateKid(index, { age: value })}
            />
          </div>
        </div>
      ))}
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white/50 p-4 text-xs text-slate-500">
        You can personalize goals, avatars, and allowances inside the dashboard.
      </div>
    </div>
  )
};

const successStep: StepDefinition = {
  id: 'success',
  title: 'Your parent dashboard is ready',
  subtitle: 'You are in. We can finish the rest later.',
  accent: 'teal',
  canContinue: () => true,
  render: (state) => (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-card sm:p-6">
        <h3 className="font-display text-lg sm:text-2xl">Family summary</h3>
        <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600 sm:gap-3">
          <div className="flex items-center gap-3">
            <FamilyIcon className="h-7 w-7 sm:h-8 sm:w-8" />
            <span>{state.familyName || 'Family name'}</span>
          </div>
          <div className="flex items-center gap-3">
            <ParentIcon className="h-7 w-7 sm:h-8 sm:w-8" />
            <span>{state.parentName || 'Parent name'}</span>
          </div>
          <div className="flex items-center gap-3">
            <ChildIcon className="h-7 w-7 sm:h-8 sm:w-8" />
            <span>{state.kids.length} kids configured</span>
          </div>
          <p className="text-xs text-slate-500 sm:hidden">You can fill in goals and avatars inside the dashboard.</p>
          <div className="mt-2 hidden grid gap-2 rounded-2xl border border-slate-100 bg-mist p-4 text-xs text-slate-500 sm:grid">
            {state.kids.map((kid, index) => (
              <span key={kid.id}>
                Kid {index + 1}: {kid.name || 'Child'} · {kid.age ?? 10} yrs
              </span>
            ))}
          </div>
          <div className="mt-3 rounded-2xl bg-ink px-4 py-3 text-xs text-mist sm:hidden">
            <p className="font-semibold text-mist">Next steps</p>
            <p className="mt-1 text-mist/80">Add goals and badges when you are ready.</p>
          </div>
        </div>
      </div>
      <div className="hidden rounded-3xl bg-ink p-5 text-mist shadow-card sm:block sm:p-6">
        <SparkIcon className="h-10 w-10" />
        <h3 className="mt-4 font-display text-xl sm:text-2xl">Next steps</h3>
        <ul className="mt-3 space-y-2 text-sm text-mist/80">
          <li>Add each kid’s first savings goal.</li>
          <li>Pick badges and customize the family view.</li>
          <li>Connect accounts when you are ready.</li>
        </ul>
      </div>
    </div>
  )
};

export function buildSteps(): StepDefinition[] {
  return [introStep, familyBasicsStep, kidProfilesStep, successStep];
}
