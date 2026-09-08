"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: Props) {
  return (
    <label className="relative block min-w-0 flex-1">
      <span className="sr-only">Search patterns</span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search patterns"
        className="w-full rounded-[10px] border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted focus:border-accent"
      />
    </label>
  );
}
