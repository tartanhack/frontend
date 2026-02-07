import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton, SecondaryButton } from '@/components/Buttons';
import { ProgressDots } from '@/components/ProgressDots';
import { StepShell } from '@/components/StepShell';
import { useOnboarding } from '../OnboardingProvider';
import { buildSteps } from '../steps';
import { useAuth } from '@/auth/AuthProvider';

const STEP_STORAGE_KEY = 'monty_onboarding_step';

export default function OnboardingPage() {
  const { state, actions } = useOnboarding();
  const { session } = useAuth();
  const navigate = useNavigate();
  const steps = useMemo(() => buildSteps(), []);
  const [currentStep, setCurrentStep] = useState(() => {
    const raw = localStorage.getItem(STEP_STORAGE_KEY);
    return raw ? Number(raw) : 0;
  });

  useEffect(() => {
    if (currentStep >= steps.length) {
      setCurrentStep(steps.length - 1);
    }
  }, [currentStep, steps.length]);

  useEffect(() => {
    localStorage.setItem(STEP_STORAGE_KEY, String(currentStep));
  }, [currentStep]);

  const step = steps[currentStep];
  const canContinue = step?.canContinue(state) ?? false;
  const isLast = currentStep === steps.length - 1;

  useEffect(() => {
    if (step?.id === 'family-basics' && !state.kidCount) {
      actions.setKidCount(1);
    }
  }, [actions, state.kidCount, step?.id]);

  useEffect(() => {
    document.body.classList.add('onboarding-lock');
    return () => {
      document.body.classList.remove('onboarding-lock');
    };
  }, []);

  const goNext = () => {
    if (!canContinue) return;
    if (isLast) {
      actions.complete();
      navigate('/dashboard');
      return;
    }
    setCurrentStep((value) => Math.min(steps.length - 1, value + 1));
  };

  const goBack = () => {
    setCurrentStep((value) => Math.max(0, value - 1));
  };

  if (!step) return null;

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 pt-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:pt-8">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Monty</p>
          <p className="text-lg font-semibold text-ink">Parent onboarding</p>
        </div>
        <div className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600 shadow-card sm:w-auto">
          Demo session · {session?.displayName ?? 'Parent'}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto overscroll-contain">
        <StepShell title={step.title} subtitle={step.subtitle} accent={step.accent}>
          {step.render(state, actions)}
        </StepShell>
      </div>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-stretch gap-4 px-4 pb-6 sm:items-center sm:px-6 sm:pb-8">
        <ProgressDots current={currentStep} total={steps.length} />
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
          {currentStep > 0 ? <SecondaryButton onClick={goBack}>Back</SecondaryButton> : null}
          <PrimaryButton onClick={goNext} disabled={!canContinue}>
            {isLast ? 'Enter dashboard' : 'Continue'}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
