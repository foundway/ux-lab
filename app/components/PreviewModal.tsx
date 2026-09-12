"use client";

import { useEffect, useState } from "react";
import type { Pattern } from "@/content/patterns";
import { withBasePath } from "@/lib/basePath";
import { downloadPatternHtml } from "@/lib/downloadPattern";

type Props = {
  pattern: Pattern | null;
  onClose: () => void;
};

export function PreviewModal({ pattern, onClose }: Props) {
  const [downloadingSlug, setDownloadingSlug] = useState<string | null>(null);

  useEffect(() => {
    if (!pattern) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [pattern, onClose]);

  if (!pattern) return null;

  const htmlHref = withBasePath(pattern.html);
  const downloading = downloadingSlug === pattern.slug;

  async function onDownload() {
    if (!pattern || downloading) return;
    setDownloadingSlug(pattern.slug);
    try {
      await downloadPatternHtml(pattern.slug, pattern.html);
    } catch {
      // keep UI simple; failure is rare on static host
    } finally {
      setDownloadingSlug(null);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="preview-title"
        className="flex h-[min(88vh,760px)] w-full max-w-3xl flex-col overflow-hidden rounded-card border border-border bg-surface shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <h2 id="preview-title" className="min-w-0 flex-1 truncate text-sm font-semibold">
            {pattern.title}
          </h2>
          <a
            href={htmlHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[8px] border border-border px-3 py-1.5 text-sm text-foreground hover:bg-background"
          >
            Open in new tab
          </a>
          <button
            type="button"
            onClick={onDownload}
            disabled={downloading}
            className="rounded-[8px] border border-border px-3 py-1.5 text-sm text-foreground hover:bg-background disabled:opacity-50"
          >
            {downloading ? "Downloading…" : "Download HTML"}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-[8px] px-3 py-1.5 text-sm text-muted hover:text-foreground"
          >
            Close
          </button>
        </div>
        <iframe
          title={pattern.title}
          src={htmlHref}
          className="min-h-0 w-full flex-1 border-0 bg-background"
        />
      </div>
    </div>
  );
}
