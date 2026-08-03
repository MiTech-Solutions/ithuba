import { useBursaries } from "./useBursaries";
import { useScholarships } from "./useScholarships";

/**
 * Combines bursaries and scholarships into a single array.
 * Each item gets an `_kind` tag: "bursary" or "scholarship"
 * so downstream components can distinguish them.
 */
export function useOpportunities() {
  const { bursaries,    loading: bLoading, error: bError } = useBursaries();
  const { scholarships, loading: sLoading, error: sError } = useScholarships();

  const loading = bLoading || sLoading;
  const error   = bError || sError || null;

  const opportunities = [
    ...bursaries.map((b)    => ({ ...b, _kind: "bursary" })),
    ...scholarships.map((s) => ({ ...s, _kind: "scholarship" })),
  ];

  return { opportunities, bursaries, scholarships, loading, error };
}
