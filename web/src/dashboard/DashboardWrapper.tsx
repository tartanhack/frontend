import { useOnboarding } from '@/onboarding/OnboardingProvider';
import DashboardPage from './DashboardPage';

export default function DashboardWrapper() {
  const { state } = useOnboarding();

  const familyName = state.familyName || 'The Johnsons';
  const parentName = state.parentName || 'Sarah';
  const firstKid = state.kids?.[0];
  const kidName = firstKid?.name || 'Emma';

  return (
    <DashboardPage
      familyName={familyName}
      parentName={parentName}
      kidName={kidName}
    />
  );
}
