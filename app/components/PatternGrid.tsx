"use client";

import type { Pattern } from "@/content/patterns";
import { PatternCard } from "./PatternCard";
import type { ViewMode } from "./ViewToggle";

type Props = {
  patterns: Pattern[];
  onOpen: (pattern: Pattern) => void;
  view: ViewMode;
};

export function PatternGrid({ patterns, onOpen, view }: Props) {
  if (patterns.length === 0) {
    return (
      <p className="rounded-card border border-dashed border-border bg-surface px-6 py-16 text-center text-sm text-muted">
        No patterns match. Try another search or tag.
      </p>
    );
  }

  if (view === "list") {
    return (
      <div className="divide-y divide-border overflow-hidden rounded-card border border-border bg-surface">
        {patterns.map((pattern) => (
          <PatternCard key={pattern.slug} pattern={pattern} onOpen={onOpen} layout="row" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {patterns.map((pattern) => (
        <PatternCard key={pattern.slug} pattern={pattern} onOpen={onOpen} />
      ))}
    </div>
  );
}
