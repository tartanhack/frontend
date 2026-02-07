import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import {
  fetchFamilies,
  fetchFamilyOverview,
  type ApiFamily,
  type ApiFamilyOverview,
} from './client';

export interface MontyChild {
  id: string;
  name: string;
  age: number;
}

export interface MontyDataContextValue {
  loading: boolean;
  error: string | null;
  familyId: string | null;
  children: MontyChild[];
  overview: ApiFamilyOverview | null;
  refetch: () => void;
}

const MontyDataContext = createContext<MontyDataContextValue | null>(null);

export function MontyDataProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [family, setFamily] = useState<ApiFamily | null>(null);
  const [overview, setOverview] = useState<ApiFamilyOverview | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Check if user selected a family during onboarding
      const selectedFamilyId = localStorage.getItem('monty_selected_family_id');

      const { families } = await fetchFamilies();
      if (families.length === 0) {
        setError('No family data found. Please seed the backend.');
        setLoading(false);
        return;
      }

      // Use selected family if available, otherwise use first family
      let fam = families.find((f) => f.id === selectedFamilyId) || families[0];
      setFamily(fam);

      const ov = await fetchFamilyOverview(fam.id);
      setOverview(ov);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const childList: MontyChild[] = useMemo(() => {
    if (overview) {
      return overview.children.map((c) => ({ id: c.id, name: c.name, age: c.age }));
    }
    if (family) {
      return family.children;
    }
    return [];
  }, [family, overview]);

  const value = useMemo<MontyDataContextValue>(
    () => ({
      loading,
      error,
      familyId: family?.id ?? null,
      children: childList,
      overview,
      refetch: load,
    }),
    [loading, error, family, childList, overview, load],
  );

  return (
    <MontyDataContext.Provider value={value}>{children}</MontyDataContext.Provider>
  );
}

export function useMontyData() {
  const ctx = useContext(MontyDataContext);
  if (!ctx) throw new Error('useMontyData must be used within MontyDataProvider');
  return ctx;
}
