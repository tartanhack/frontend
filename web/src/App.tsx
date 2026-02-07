import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '@/auth/AuthProvider';
import { OnboardingProvider } from '@/onboarding/OnboardingProvider';
import OnboardingPage from '@/onboarding/pages/OnboardingPage';
import DashboardPlaceholder from '@/pages/DashboardPlaceholder';

export default function App() {
  return (
    <AuthProvider>
      <OnboardingProvider>
        <Routes>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/dashboard" element={<DashboardPlaceholder />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </OnboardingProvider>
    </AuthProvider>
  );
}
