"use client";

type Props = {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
};

export function FilterChips({ tags, active, onChange }: Props) {
  const options = ["All", ...tags];

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
      {options.map((tag) => {
        const selected = active === tag;
        return (
          <button
            key={tag}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(tag)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              selected
                ? "border-foreground bg-foreground text-surface"
                : "border-border bg-surface text-muted hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
