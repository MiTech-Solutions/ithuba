import { useBursaries } from "./useBursaries";
import { useScholarships } from "./useScholarships";
import { useInternships } from "./useInternships";

/**
 * Combines bursaries, scholarships, and internships into one array.
 * Each item gets a `_kind` tag: "bursary", "scholarship", or "internship"
 */
export function useOpportunities() {
  const { bursaries,    loading: bLoading, error: bError } = useBursaries();
  const { scholarships, loading: sLoading, error: sError } = useScholarships();
  const { internships,  loading: iLoading, error: iError } = useInternships();

  const loading = bLoading || sLoading || iLoading;
  const error   = bError || sError || iError || null;

  const opportunities = [
    ...bursaries.map((b)    => ({ ...b, _kind: "bursary" })),
    ...scholarships.map((s) => ({ ...s, _kind: "scholarship" })),
    ...internships.map((i)  => ({ ...i, _kind: "internship" })),
  ];

  return { opportunities, bursaries, scholarships, internships, loading, error };
}
