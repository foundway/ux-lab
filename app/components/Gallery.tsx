"use client";

import { useCallback, useMemo, useState, useSyncExternalStore } from "react";
import type { Pattern } from "@/content/patterns";
import { CanonModal } from "./CanonModal";
import { FilterChips } from "./FilterChips";
import { PatternGrid } from "./PatternGrid";
import { PreviewModal } from "./PreviewModal";
import { SearchBar } from "./SearchBar";
import { SortSelect, type SortKey } from "./SortSelect";
import { ViewToggle, type ViewMode } from "./ViewToggle";

type Props = {
  patterns: Pattern[];
  canonMarkdown: string;
};

function subscribeCanonQuery(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

function getCanonQuery() {
  return new URLSearchParams(window.location.search).get("canon");
}

export function Gallery({ patterns, canonMarkdown }: Props) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [sort, setSort] = useState<SortKey>("az");
  const [open, setOpen] = useState<Pattern | null>(null);
  const [canonManualOpen, setCanonManualOpen] = useState(false);
  const [canonDismissed, setCanonDismissed] = useState(false);
  const [view, setView] = useState<ViewMode>("gallery");
  const close = useCallback(() => setOpen(null), []);
  const canonAnchor = useSyncExternalStore(subscribeCanonQuery, getCanonQuery, () => null);
  const canonOpen = canonManualOpen || Boolean(canonAnchor && !canonDismissed);
  const closeCanon = useCallback(() => {
    setCanonManualOpen(false);
    setCanonDismissed(true);
  }, []);
  const openCanon = useCallback(() => {
    setCanonManualOpen(true);
    setCanonDismissed(false);
  }, []);

  const tags = useMemo(() => {
    return [...new Set(patterns.flatMap((p) => p.tags))].sort((a, b) =>
      a.localeCompare(b, "en"),
    );
  }, [patterns]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = patterns.filter((p) => {
      const matchesTag = tag === "All" || p.tags.includes(tag);
      const hay = `${p.title} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
      return matchesTag && (!q || hay.includes(q));
    });

    return filtered.sort((a, b) => {
      if (sort === "newest") return b.updatedAt.localeCompare(a.updatedAt, "en");
      if (sort === "category") {
        const byCat = a.category.localeCompare(b.category, "en");
        return byCat || a.title.localeCompare(b.title, "en");
      }
      return a.title.localeCompare(b.title, "en");
    });
  }, [patterns, query, tag, sort]);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-5 py-12">
      <button
        type="button"
        onClick={openCanon}
        className="fixed top-4 right-4 z-40 rounded-[8px] border border-border bg-surface px-3 py-1.5 text-sm text-foreground shadow-card hover:bg-background"
      >
        Canon
      </button>

      <header className="flex flex-col gap-2 pr-28">
        <h1 className="text-3xl font-semibold tracking-tight">UX Lab</h1>
        <p className="max-w-xl text-muted">
          An experimental site exploring UX principles, heuristics, and patterns.
          Entries are AI-generated and human-reviewed.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <SearchBar value={query} onChange={setQuery} />
          <div className="flex shrink-0 items-center gap-2">
            <SortSelect value={sort} onChange={setSort} />
            <ViewToggle value={view} onChange={setView} />
          </div>
        </div>
        <FilterChips tags={tags} active={tag} onChange={setTag} />
      </div>

      <PatternGrid patterns={visible} onOpen={setOpen} view={view} />
      <PreviewModal pattern={open} onClose={close} />
      <CanonModal
        markdown={canonMarkdown}
        open={canonOpen}
        onClose={closeCanon}
        scrollTo={canonAnchor}
      />
    </div>
  );
}
