"use client";

export type SortKey = "az" | "newest" | "category";

type Props = {
  value: SortKey;
  onChange: (value: SortKey) => void;
};

export function SortSelect({ value, onChange }: Props) {
  return (
    <label className="flex items-center gap-2 text-sm text-muted">
      Sort
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
        className="rounded-[10px] border border-border bg-surface px-2 py-2 text-sm text-foreground outline-none focus:border-accent"
      >
        <option value="az">A–Z</option>
        <option value="newest">Newest</option>
        <option value="category">Category</option>
      </select>
    </label>
  );
}
