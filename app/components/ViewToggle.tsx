"use client";

export type ViewMode = "gallery" | "list";

type Props = {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
};

export function ViewToggle({ value, onChange }: Props) {
  return (
    <div
      className="flex shrink-0 rounded-[10px] border border-border bg-surface p-0.5"
      role="group"
      aria-label="View"
    >
      <button
        type="button"
        aria-pressed={value === "gallery"}
        onClick={() => onChange("gallery")}
        className={`rounded-[8px] px-3 py-1.5 text-sm ${
          value === "gallery"
            ? "bg-foreground text-surface"
            : "text-muted hover:text-foreground"
        }`}
      >
        Gallery
      </button>
      <button
        type="button"
        aria-pressed={value === "list"}
        onClick={() => onChange("list")}
        className={`rounded-[8px] px-3 py-1.5 text-sm ${
          value === "list"
            ? "bg-foreground text-surface"
            : "text-muted hover:text-foreground"
        }`}
      >
        List
      </button>
    </div>
  );
}
