"use client";

import { useEffect, useState } from "react";

type HealthPayload = {
  status: string;
  timestamp: string;
  framework: string;
};

export default function HealthClient() {
  const [data, setData] = useState<HealthPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadHealth() {
      try {
        const response = await fetch("/api/health");

        if (!response.ok) {
          throw new Error("Unable to load health status.");
        }

        const payload = (await response.json()) as HealthPayload;

        if (isMounted) {
          setData(payload);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Unexpected error.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadHealth();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 px-6 py-16 text-zinc-50">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur md:p-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">
              Health Check
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Health</h1>
          </div>
          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
            Live status
          </span>
        </div>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
          Monitor the API health response and confirm that the app is responding as expected.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-950/50 p-6">
          {loading && (
            <div className="flex items-center gap-3 text-zinc-300">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-400 border-t-transparent" />
              <span>Loading health data...</span>
            </div>
          )}

          {error && !loading && (
            <div className="rounded-xl border border-rose-400/30 bg-rose-500/10 p-4 text-rose-200">
              <p className="font-medium">Unable to load health data.</p>
              <p className="mt-1 text-sm">{error}</p>
            </div>
          )}

          {data && !loading && (
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-300">
                  ✅ Status
                </p>
                <p className="mt-2 text-xl font-semibold text-white">{data.status}</p>
              </div>

              <div className="rounded-xl border border-sky-400/20 bg-sky-500/10 p-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-300">
                  🕒 Timestamp
                </p>
                <p className="mt-2 text-sm font-medium text-white">
                  {new Date(data.timestamp).toLocaleString()}
                </p>
              </div>

              <div className="rounded-xl border border-violet-400/20 bg-violet-500/10 p-4">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
                  ⚡ Framework
                </p>
                <p className="mt-2 text-xl font-semibold text-white">{data.framework}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
