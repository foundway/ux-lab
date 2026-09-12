export type PatternCanon = {
  /** Id of the matching heading/anchor in CANON.md (opened via ?canon=) */
  anchor: string;
  /** Short label shown in snippet footnotes and UI */
  label: string;
  /** Why this card illustrates this Canon entry */
  note: string;
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
  /** Which Canon entries this demo illustrates; first entry is primary */
  canon: PatternCanon[];
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
    canon: [
      {
        anchor: "nielsen-3",
        label: "Nielsen #3 — User control and freedom",
        note: "The toast leaves the user in control by making a mistaken archive reversible for a short window.",
      },
      {
        anchor: "confidence-to-act",
        label: "Confidence to act",
        note: "Reversibility removes fear because the action can be tried without committing immediately.",
      },
      {
        anchor: "principle-feedback",
        label: "Feedback",
        note: "The toast confirms the action immediately while staying lightweight and temporary.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-7",
        label: "Nielsen #7 — Flexibility and efficiency of use",
        note: "Search and keyboard shortcuts accelerate common actions without blocking pointer users.",
      },
      {
        anchor: "progressive-disclosure",
        label: "Progressive disclosure",
        note: "The palette keeps commands off the canvas until the user asks for them.",
      },
      {
        anchor: "value-density",
        label: "Value density",
        note: "One compact surface reaches many actions without permanent navigation chrome.",
      },
      {
        anchor: "workflow-compatibility",
        label: "Workflow compatibility",
        note: "Experts can jump directly to destinations instead of stepping through menus.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-9",
        label: "Nielsen #9 — Help users recognize, diagnose, and recover from errors",
        note: "The email field names the problem in place and shows how to fix it before submission.",
      },
      {
        anchor: "confidence-to-act",
        label: "Confidence to act",
        note: "Inline repair keeps the user confident because the next valid step is visible.",
      },
      {
        anchor: "principle-feedback",
        label: "Feedback",
        note: "Typing produces immediate validation feedback tied to the field that needs attention.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-1",
        label: "Nielsen #1 — Visibility of system status",
        note: "The empty state explains why no projects appear and what status the user is in.",
      },
      {
        anchor: "structure-clarity",
        label: "Structure clarity",
        note: "Hierarchy separates the empty explanation from the primary next action.",
      },
      {
        anchor: "confidence-to-act",
        label: "Confidence to act",
        note: "Clear copy and a focused button make the first step feel safe and obvious.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-1",
        label: "Nielsen #1 — Visibility of system status",
        note: "The placeholders make waiting visible while the page fetches real content.",
      },
      {
        anchor: "structure-clarity",
        label: "Structure clarity",
        note: "Stable skeleton regions preserve the eventual hierarchy while data loads.",
      },
      {
        anchor: "confidence-to-act",
        label: "Confidence to act",
        note: "The loading shape reassures users that progress is underway.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-5",
        label: "Nielsen #5 — Error prevention",
        note: "The dialog interrupts a destructive delete before the costly action is committed.",
      },
      {
        anchor: "confidence-to-act",
        label: "Confidence to act",
        note: "Cancel is available as the safe path, so users can back out without penalty.",
      },
      {
        anchor: "principle-constraints",
        label: "Constraints",
        note: "The extra confirmation constrains a risky action to a deliberate choice.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-1",
        label: "Nielsen #1 — Visibility of system status",
        note: "The upload progress bar and status text keep the user informed as work advances.",
      },
      {
        anchor: "confidence-to-act",
        label: "Confidence to act",
        note: "Visible progress builds trust that the upload is still moving.",
      },
      {
        anchor: "principle-visibility",
        label: "Visibility",
        note: "The current system state is exposed instead of hidden behind a spinner.",
      },
      {
        anchor: "principle-feedback",
        label: "Feedback",
        note: "Progress changes respond directly to the upload action.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-2",
        label: "Nielsen #2 — Match between system and the real world",
        note: "The booking form uses customer language instead of internal operations jargon.",
      },
      {
        anchor: "structure-clarity",
        label: "Structure clarity",
        note: "Familiar labels make the form hierarchy easier to scan and understand.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-3",
        label: "Nielsen #3 — User control and freedom",
        note: "Back and cancel exits let the user leave the checkout path without losing orientation.",
      },
      {
        anchor: "confidence-to-act",
        label: "Confidence to act",
        note: "Obvious exits reduce hesitation because the current step is not a trap.",
      },
      {
        anchor: "workflow-compatibility",
        label: "Workflow compatibility",
        note: "Users can escape a mistaken flow without restarting from scratch.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-4",
        label: "Nielsen #4 — Consistency and standards",
        note: "Repeated Save and Cancel placement teaches one interaction model across panels.",
      },
      {
        anchor: "structure-clarity",
        label: "Structure clarity",
        note: "Consistent button hierarchy makes primary and secondary actions predictable.",
      },
      {
        anchor: "principle-consistency",
        label: "Consistency",
        note: "Similar controls use the same words, order, and behavior.",
      },
      {
        anchor: "workflow-compatibility",
        label: "Workflow compatibility",
        note: "The familiar pattern lets users move between panels without relearning controls.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-5",
        label: "Nielsen #5 — Error prevention",
        note: "The date picker blocks an impossible range before the user submits the form.",
      },
      {
        anchor: "confidence-to-act",
        label: "Confidence to act",
        note: "Disabled invalid choices make the valid next action clear.",
      },
      {
        anchor: "principle-constraints",
        label: "Constraints",
        note: "Date constraints narrow input to combinations the system can accept.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-6",
        label: "Nielsen #6 — Recognition rather than recall",
        note: "Recent search chips put past queries in view instead of asking users to remember them.",
      },
      {
        anchor: "structure-clarity",
        label: "Structure clarity",
        note: "Grouped chips clarify which options are suggested shortcuts.",
      },
      {
        anchor: "progressive-disclosure",
        label: "Progressive disclosure",
        note: "Suggestions appear when search is the task, not as permanent page clutter.",
      },
      {
        anchor: "value-density",
        label: "Value density",
        note: "Compact chips expose useful shortcuts in little space.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-7",
        label: "Nielsen #7 — Flexibility and efficiency of use",
        note: "Buttons and keyboard shortcuts support both novice and expert paths to the same actions.",
      },
      {
        anchor: "workflow-compatibility",
        label: "Workflow compatibility",
        note: "Users can keep their preferred interaction style as speed needs change.",
      },
      {
        anchor: "progressive-disclosure",
        label: "Progressive disclosure",
        note: "Shortcut hints appear beside actions without replacing visible controls.",
      },
      {
        anchor: "value-density",
        label: "Value density",
        note: "One row carries labels, actions, and accelerators without extra screens.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-8",
        label: "Nielsen #8 — Aesthetic and minimalist design",
        note: "Removing promo clutter lets the payment task stay visible and central.",
      },
      {
        anchor: "value-density",
        label: "Value density",
        note: "The remaining content earns its space by serving the primary payment decision.",
      },
      {
        anchor: "structure-clarity",
        label: "Structure clarity",
        note: "The primary task wins the hierarchy when competing elements are stripped away.",
      },
      {
        anchor: "principle-rams",
        label: "Good design is as little design as possible",
        note: "The demo shows how less visual design can make the necessary action stronger.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-9",
        label: "Nielsen #9 — Help users recognize, diagnose, and recover from errors",
        note: "The declined payment message explains the issue plainly and offers concrete next steps.",
      },
      {
        anchor: "confidence-to-act",
        label: "Confidence to act",
        note: "Actionable recovery options help the user continue instead of abandoning the flow.",
      },
    ],
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
    canon: [
      {
        anchor: "nielsen-10",
        label: "Nielsen #10 — Help and documentation",
        note: "Searchable help beside the field gives concrete steps without leaving the task.",
      },
      {
        anchor: "progressive-disclosure",
        label: "Progressive disclosure",
        note: "Help stays available on demand instead of occupying the form by default.",
      },
      {
        anchor: "workflow-compatibility",
        label: "Workflow compatibility",
        note: "In-context documentation supports the current task without forcing a detour.",
      },
    ],
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
    canon: [
      {
        anchor: "mapping",
        label: "Mapping",
        note: "The burner controls mirror the cooktop layout so cause and effect can be seen.",
      },
      {
        anchor: "structure-clarity",
        label: "Structure clarity",
        note: "Spatial grouping makes each control's target obvious before interaction.",
      },
    ],
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
    canon: [
      {
        anchor: "affordances-and-signifiers",
        label: "Affordances and signifiers",
        note: "The pull handle and push plate communicate their intended actions through form.",
      },
      {
        anchor: "structure-clarity",
        label: "Structure clarity",
        note: "Distinct hardware cues make the available action legible at a glance.",
      },
    ],
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
    canon: [
      {
        anchor: "fitts-s-law",
        label: "Fitts's law",
        note: "The large nearby Save button is faster to hit than the tiny distant target.",
      },
      {
        anchor: "value-density",
        label: "Value density",
        note: "Space is allocated to make the primary pointer action efficient.",
      },
      {
        anchor: "workflow-compatibility",
        label: "Workflow compatibility",
        note: "A bigger, closer frequent action fits fast repeated work.",
      },
    ],
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
    canon: [
      {
        anchor: "hick-s-law",
        label: "Hick's law",
        note: "The short format list reduces choice time compared with a long menu.",
      },
      {
        anchor: "progressive-disclosure",
        label: "Progressive disclosure",
        note: "Keeping options staged prevents the user from confronting unnecessary choices at once.",
      },
      {
        anchor: "value-density",
        label: "Value density",
        note: "A smaller visible set makes each option earn attention.",
      },
    ],
  },
  {
    slug: "progressive-disclosure",
    title: "Progressive disclosure",
    description: "Keep the usual invite path simple and reveal expiry and password only when Advanced is opened.",
    tags: ["disclosure", "forms", "complexity"],
    category: "Forms",
    createdAt: "2026-09-12",
    updatedAt: "2026-09-12",
    html: "/patterns/progressive-disclosure/index.html",
    thumb: "/patterns/progressive-disclosure/thumb.svg",
    canon: [
      {
        anchor: "progressive-disclosure",
        label: "Progressive disclosure",
        note: "Advanced share options stay hidden until requested, so the usual invite path stays simple.",
      },
      {
        anchor: "value-density",
        label: "Value density",
        note: "Rare controls do not occupy the first screen, so the frequent action stays easy to find.",
      },
    ],
    isNew: true,
  },
];

export const patternsByCanonAnchor = patterns.reduce((index, pattern) => {
  for (const canon of pattern.canon) {
    const related = index.get(canon.anchor);
    if (related) related.push(pattern);
    else index.set(canon.anchor, [pattern]);
  }
  return index;
}, new Map<string, Pattern[]>());
