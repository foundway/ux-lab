export type Pattern = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  updatedAt: string;
  html: string;
  thumb: string;
};

export const patterns: Pattern[] = [
  {
    slug: "toast-undo",
    title: "Toast with undo",
    description: "Ephemeral confirmation with a short window to reverse the action.",
    tags: ["feedback", "toast"],
    category: "Feedback",
    updatedAt: "2026-09-08",
    html: "/patterns/toast-undo/index.html",
    thumb: "/patterns/toast-undo/thumb.svg",
  },
  {
    slug: "command-palette",
    title: "Command palette",
    description: "Keyboard-first search that jumps to actions without leaving the page.",
    tags: ["navigation", "keyboard"],
    category: "Navigation",
    updatedAt: "2026-09-07",
    html: "/patterns/command-palette/index.html",
    thumb: "/patterns/command-palette/thumb.svg",
  },
  {
    slug: "inline-validation",
    title: "Inline form validation",
    description: "Field-level errors as the user types, with a clear path to fix.",
    tags: ["forms", "errors"],
    category: "Forms",
    updatedAt: "2026-09-06",
    html: "/patterns/inline-validation/index.html",
    thumb: "/patterns/inline-validation/thumb.svg",
  },
  {
    slug: "empty-state",
    title: "Empty state",
    description: "A first-run view that explains why the space is empty and what to do next.",
    tags: ["onboarding", "content"],
    category: "Content",
    updatedAt: "2026-09-05",
    html: "/patterns/empty-state/index.html",
    thumb: "/patterns/empty-state/thumb.svg",
  },
  {
    slug: "skeleton-loading",
    title: "Skeleton loading",
    description: "Placeholder shapes that match the final layout while data loads.",
    tags: ["loading", "feedback"],
    category: "Feedback",
    updatedAt: "2026-09-04",
    html: "/patterns/skeleton-loading/index.html",
    thumb: "/patterns/skeleton-loading/thumb.svg",
  },
  {
    slug: "confirm-dialog",
    title: "Confirm dialog",
    description: "A pause before a destructive action, with cancel as the safe default.",
    tags: ["dialogs", "destructive"],
    category: "Dialogs",
    updatedAt: "2026-09-03",
    html: "/patterns/confirm-dialog/index.html",
    thumb: "/patterns/confirm-dialog/thumb.svg",
  },
];
