"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type State = "idle" | "submitting" | "success" | "error";

export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Subscription failed");
      }
      setState("success");
      setEmail("");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Subscription failed");
    }
  };

  if (state === "success") {
    return (
      <div className={cn("flex items-center gap-3 text-white/85 font-sans text-sm", compact && "text-xs")}>
        <CheckCircle2 className="w-4 h-4" />
        <span>You&rsquo;re on the list. Watch your inbox.</span>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3">
      <div className="flex items-center gap-3 border-b border-white/20 focus-within:border-white transition-colors">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@brand.com"
          aria-label="Email address"
          className="flex-1 bg-transparent text-white placeholder:text-white/30 py-3 font-sans text-sm focus:outline-none"
        />
        <button
          type="submit"
          disabled={state === "submitting"}
          aria-label="Subscribe"
          className="text-white/70 hover:text-white transition-colors disabled:opacity-50 py-3"
        >
          {state === "submitting" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <ArrowUpRight className="w-4 h-4" />
          )}
        </button>
      </div>
      {state === "error" && error && (
        <p className="flex items-center gap-2 text-white/85 text-xs font-sans">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </form>
  );
}
