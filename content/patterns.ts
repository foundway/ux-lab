export type PatternCanon = {
  /** Short label shown in the snippet footnote and UI */
  label: string;
  /** Id of the matching heading/anchor in CANON.md (opened via ?canon=) */
  anchor: string;
};

export type Pattern = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  /** ISO date the snippet was first added (YYYY-MM-DD) */
  createdAt: string;
  updatedAt: string;
  html: string;
  thumb: string;
  /** Which Canon entry this demo illustrates */
  canon: PatternCanon;
  /**
   * Only the latest addition batch should be true.
   * When adding new snippets: set isNew: true on them and clear isNew on every other entry.
   */
  isNew?: boolean;
};

export const patterns: Pattern[] = [
  {
    slug: "toast-undo",
    title: "Toast with undo",
    description: "Ephemeral confirmation with a short window to reverse the action.",
    tags: ["feedback", "toast"],
    category: "Feedback",
    createdAt: "2026-09-08",
    updatedAt: "2026-09-08",
    html: "/patterns/toast-undo/index.html",
    thumb: "/patterns/toast-undo/thumb.svg",
    canon: {
      label: "Nielsen #3 — User control and freedom",
      anchor: "nielsen-3",
    },
  },
  {
    slug: "command-palette",
    title: "Command palette",
    description: "Keyboard-first search that jumps to actions without leaving the page.",
    tags: ["navigation", "keyboard"],
    category: "Navigation",
    createdAt: "2026-09-07",
    updatedAt: "2026-09-07",
    html: "/patterns/command-palette/index.html",
    thumb: "/patterns/command-palette/thumb.svg",
    canon: {
      label: "Nielsen #7 — Flexibility and efficiency of use",
      anchor: "nielsen-7",
    },
  },
  {
    slug: "inline-validation",
    title: "Inline form validation",
    description: "Field-level errors as the user types, with a clear path to fix.",
    tags: ["forms", "errors"],
    category: "Forms",
    createdAt: "2026-09-06",
    updatedAt: "2026-09-06",
    html: "/patterns/inline-validation/index.html",
    thumb: "/patterns/inline-validation/thumb.svg",
    canon: {
      label: "Nielsen #9 — Help users recognize, diagnose, and recover from errors",
      anchor: "nielsen-9",
    },
  },
  {
    slug: "empty-state",
    title: "Empty state",
    description: "A first-run view that explains why the space is empty and what to do next.",
    tags: ["onboarding", "content"],
    category: "Content",
    createdAt: "2026-09-05",
    updatedAt: "2026-09-05",
    html: "/patterns/empty-state/index.html",
    thumb: "/patterns/empty-state/thumb.svg",
    canon: {
      label: "Nielsen #1 — Visibility of system status",
      anchor: "nielsen-1",
    },
  },
  {
    slug: "skeleton-loading",
    title: "Skeleton loading",
    description: "Placeholder shapes that match the final layout while data loads.",
    tags: ["loading", "feedback"],
    category: "Feedback",
    createdAt: "2026-09-04",
    updatedAt: "2026-09-04",
    html: "/patterns/skeleton-loading/index.html",
    thumb: "/patterns/skeleton-loading/thumb.svg",
    canon: {
      label: "Nielsen #1 — Visibility of system status",
      anchor: "nielsen-1",
    },
  },
  {
    slug: "confirm-dialog",
    title: "Confirm dialog",
    description: "A pause before a destructive action, with cancel as the safe default.",
    tags: ["dialogs", "destructive"],
    category: "Dialogs",
    createdAt: "2026-09-03",
    updatedAt: "2026-09-03",
    html: "/patterns/confirm-dialog/index.html",
    thumb: "/patterns/confirm-dialog/thumb.svg",
    canon: {
      label: "Nielsen #5 — Error prevention",
      anchor: "nielsen-5",
    },
  },
  {
    slug: "visibility-system-status",
    title: "Visibility of system status",
    description: "Nielsen #1 — upload progress that keeps the user informed in real time.",
    tags: ["nielsen", "feedback", "status"],
    category: "Heuristics",
    createdAt: "2026-09-08",
    updatedAt: "2026-09-08",
    html: "/patterns/visibility-system-status/index.html",
    thumb: "/patterns/visibility-system-status/thumb.svg",
    canon: {
      label: "Nielsen #1 — Visibility of system status",
      anchor: "nielsen-1",
    },
  },
  {
    slug: "match-real-world",
    title: "Match the real world",
    description: "Nielsen #2 — plain language versus jargon on the same booking form.",
    tags: ["nielsen", "language", "forms"],
    category: "Heuristics",
    createdAt: "2026-09-08",
    updatedAt: "2026-09-08",
    html: "/patterns/match-real-world/index.html",
    thumb: "/patterns/match-real-world/thumb.svg",
    canon: {
      label: "Nielsen #2 — Match between system and the real world",
      anchor: "nielsen-2",
    },
  },
  {
    slug: "user-control-freedom",
    title: "User control and freedom",
    description: "Nielsen #3 — cancel and back as emergency exits from a checkout wizard.",
    tags: ["nielsen", "navigation", "control"],
    category: "Heuristics",
    createdAt: "2026-09-08",
    updatedAt: "2026-09-08",
    html: "/patterns/user-control-freedom/index.html",
    thumb: "/patterns/user-control-freedom/thumb.svg",
    canon: {
      label: "Nielsen #3 — User control and freedom",
      anchor: "nielsen-3",
    },
  },
  {
    slug: "consistency-standards",
    title: "Consistency and standards",
    description: "Nielsen #4 — same Save/Cancel treatment across panels, versus a confusing mismatch.",
    tags: ["nielsen", "consistency"],
    category: "Heuristics",
    createdAt: "2026-09-08",
    updatedAt: "2026-09-08",
    html: "/patterns/consistency-standards/index.html",
    thumb: "/patterns/consistency-standards/thumb.svg",
    canon: {
      label: "Nielsen #4 — Consistency and standards",
      anchor: "nielsen-4",
    },
  },
  {
    slug: "error-prevention",
    title: "Error prevention",
    description: "Nielsen #5 — date constraints that block an impossible range before submit.",
    tags: ["nielsen", "forms", "errors"],
    category: "Heuristics",
    createdAt: "2026-09-08",
    updatedAt: "2026-09-08",
    html: "/patterns/error-prevention/index.html",
    thumb: "/patterns/error-prevention/thumb.svg",
    canon: {
      label: "Nielsen #5 — Error prevention",
      anchor: "nielsen-5",
    },
  },
  {
    slug: "recognition-not-recall",
    title: "Recognition rather than recall",
    description: "Nielsen #6 — recent searches as chips so users recognize instead of remembering.",
    tags: ["nielsen", "search", "memory"],
    category: "Heuristics",
    createdAt: "2026-09-08",
    updatedAt: "2026-09-08",
    html: "/patterns/recognition-not-recall/index.html",
    thumb: "/patterns/recognition-not-recall/thumb.svg",
    canon: {
      label: "Nielsen #6 — Recognition rather than recall",
      anchor: "nielsen-6",
    },
  },
  {
    slug: "flexibility-efficiency",
    title: "Flexibility and efficiency",
    description: "Nielsen #7 — the same actions via buttons for novices and shortcuts for experts.",
    tags: ["nielsen", "keyboard", "efficiency"],
    category: "Heuristics",
    createdAt: "2026-09-08",
    updatedAt: "2026-09-08",
    html: "/patterns/flexibility-efficiency/index.html",
    thumb: "/patterns/flexibility-efficiency/thumb.svg",
    canon: {
      label: "Nielsen #7 — Flexibility and efficiency of use",
      anchor: "nielsen-7",
    },
  },
  {
    slug: "aesthetic-minimalist",
    title: "Aesthetic and minimalist",
    description: "Nielsen #8 — strip promo clutter so the pay task stays visible.",
    tags: ["nielsen", "content", "focus"],
    category: "Heuristics",
    createdAt: "2026-09-08",
    updatedAt: "2026-09-08",
    html: "/patterns/aesthetic-minimalist/index.html",
    thumb: "/patterns/aesthetic-minimalist/thumb.svg",
    canon: {
      label: "Nielsen #8 — Aesthetic and minimalist design",
      anchor: "nielsen-8",
    },
  },
  {
    slug: "error-recovery",
    title: "Error recovery",
    description: "Nielsen #9 — a declined payment explained in plain language with clear next steps.",
    tags: ["nielsen", "errors", "recovery"],
    category: "Heuristics",
    createdAt: "2026-09-08",
    updatedAt: "2026-09-08",
    html: "/patterns/error-recovery/index.html",
    thumb: "/patterns/error-recovery/thumb.svg",
    canon: {
      label: "Nielsen #9 — Help users recognize, diagnose, and recover from errors",
      anchor: "nielsen-9",
    },
  },
  {
    slug: "help-documentation",
    title: "Help and documentation",
    description: "Nielsen #10 — searchable, in-context help with concrete steps beside a field.",
    tags: ["nielsen", "help", "docs"],
    category: "Heuristics",
    createdAt: "2026-09-08",
    updatedAt: "2026-09-08",
    html: "/patterns/help-documentation/index.html",
    thumb: "/patterns/help-documentation/thumb.svg",
    canon: {
      label: "Nielsen #10 — Help and documentation",
      anchor: "nielsen-10",
    },
  },
  {
    slug: "natural-mapping",
    title: "Natural mapping",
    description: "Burner knobs laid out like the cooktop so each control maps to its effect.",
    tags: ["norman", "mapping"],
    category: "Principles",
    createdAt: "2026-09-09",
    updatedAt: "2026-09-09",
    html: "/patterns/natural-mapping/index.html",
    thumb: "/patterns/natural-mapping/thumb.svg",
    canon: {
      label: "Mapping",
      anchor: "mapping",
    },
  },
  {
    slug: "affordances-signifiers",
    title: "Affordances and signifiers",
    description: "A pull handle versus a push plate so the hardware itself communicates the action.",
    tags: ["norman", "affordance"],
    category: "Principles",
    createdAt: "2026-09-09",
    updatedAt: "2026-09-09",
    html: "/patterns/affordances-signifiers/index.html",
    thumb: "/patterns/affordances-signifiers/thumb.svg",
    canon: {
      label: "Affordances and signifiers",
      anchor: "affordances-and-signifiers",
    },
  },
  {
    slug: "fitts-law",
    title: "Fitts's law",
    description: "Hit a large nearby Save versus a tiny distant one to feel how size and distance affect pointing.",
    tags: ["fitts", "pointing"],
    category: "Principles",
    createdAt: "2026-09-10",
    updatedAt: "2026-09-10",
    html: "/patterns/fitts-law/index.html",
    thumb: "/patterns/fitts-law/thumb.svg",
    canon: {
      label: "Fitts's law",
      anchor: "fitts-s-law",
    },
  },
  {
    slug: "hicks-law",
    title: "Hick's law",
    description: "Pick PDF from three formats versus a long list to feel how extra options slow the choice.",
    tags: ["hick", "choice"],
    category: "Principles",
    createdAt: "2026-09-11",
    updatedAt: "2026-09-11",
    html: "/patterns/hicks-law/index.html",
    thumb: "/patterns/hicks-law/thumb.svg",
    canon: {
      label: "Hick's law",
      anchor: "hick-s-law",
    },
    isNew: true,
  },
];
