"use client";

import type { Pattern } from "@/content/patterns";
import { withBasePath } from "@/lib/basePath";

type Props = {
  pattern: Pattern;
  onOpen: (pattern: Pattern) => void;
  layout?: "card" | "row";
};

function Title({ pattern }: { pattern: Pattern }) {
  return (
    <h2 className="flex flex-wrap items-center gap-2 text-[0.95rem] font-semibold tracking-tight">
      <span>{pattern.title}</span>
      {pattern.isNew ? (
        <span className="rounded-full bg-accent px-1.5 py-0.5 text-[0.65rem] font-semibold tracking-wide text-accent-fg">
          NEW
        </span>
      ) : null}
    </h2>
  );
}

export function PatternCard({ pattern, onOpen, layout = "card" }: Props) {
  const thumb = withBasePath(pattern.thumb);

  if (layout === "row") {
    return (
      <button
        type="button"
        onClick={() => onOpen(pattern)}
        className="flex w-full items-center gap-4 bg-surface px-3 py-3 text-left transition-colors hover:bg-background"
      >
        <img
          src={thumb}
          alt=""
          className="h-14 w-[88px] shrink-0 rounded-[8px] bg-background object-cover"
        />
        <div className="min-w-0 flex-1">
          <Title pattern={pattern} />
          <p className="mt-0.5 truncate text-sm text-muted">{pattern.description}</p>
        </div>
        <div className="hidden shrink-0 flex-wrap justify-end gap-1.5 sm:flex">
          {pattern.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2 py-0.5 text-[0.7rem] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(pattern)}
      className="group flex flex-col overflow-hidden rounded-card border border-border bg-surface text-left shadow-card transition-colors hover:border-foreground/20"
    >
      <img
        src={thumb}
        alt=""
        className="aspect-[8/5] w-full bg-background object-cover"
      />
      <div className="flex flex-col gap-2 px-4 py-3">
        <Title pattern={pattern} />
        <div className="flex flex-wrap gap-1.5">
          {pattern.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2 py-0.5 text-[0.7rem] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
