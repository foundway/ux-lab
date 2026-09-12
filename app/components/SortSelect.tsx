"use client";

import { useEffect, useId, useRef, useState } from "react";

export type SortKey = "az" | "newest" | "category";

const OPTIONS: { value: SortKey; label: string }[] = [
  { value: "newest", label: "Latest" },
  { value: "az", label: "A–Z" },
  { value: "category", label: "Category" },
];

type Props = {
  value: SortKey;
  onChange: (value: SortKey) => void;
};

export function SortSelect({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const labelId = useId();
  const current = OPTIONS.find((o) => o.value === value) ?? OPTIONS[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="flex items-center gap-2 text-sm text-muted">
      <span id={labelId}>Sort</span>
      <div ref={rootRef} className="relative">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-labelledby={labelId}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-[10px] border border-border bg-surface p-2 pl-3 text-sm text-foreground outline-none focus:border-accent"
        >
          {current.label}
          <svg
            aria-hidden
            viewBox="0 0 16 16"
            className="size-4 shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </button>
        {open ? (
          <ul
            id={listId}
            role="listbox"
            aria-labelledby={labelId}
            className="absolute top-full left-0 z-20 mt-1 min-w-full overflow-hidden rounded-[10px] border border-border bg-surface py-1 text-foreground shadow-card"
          >
            {OPTIONS.map((option) => {
              const selected = option.value === value;
              return (
                <li key={option.value} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    className={`flex w-full items-center px-3 py-2 text-left text-sm ${
                      selected
                        ? "bg-accent text-accent-fg"
                        : "hover:bg-background"
                    }`}
                    onClick={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
