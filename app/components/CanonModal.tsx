"use client";

import { useEffect, type ReactNode } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { withBasePath } from "@/lib/basePath";

type Props = {
  markdown: string;
  open: boolean;
  onClose: () => void;
  scrollTo?: string | null;
};

function nodeText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (typeof node === "object" && "props" in node) {
    return nodeText((node as { props?: { children?: ReactNode } }).props?.children);
  }
  return "";
}

function headingId(children: ReactNode): string {
  const text = nodeText(children).trim();
  const numbered = /^(\d+)\.\s/.exec(text);
  if (numbered) return `nielsen-${numbered[1]}`;
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function CanonModal({ markdown, open, onClose, scrollTo }: Props) {
  useEffect(() => {
    if (!open) return;
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
  }, [open, onClose]);

  useEffect(() => {
    if (!open || !scrollTo) return;
    const timer = window.setTimeout(() => {
      document.getElementById(scrollTo)?.scrollIntoView({ block: "start" });
    }, 50);
    return () => window.clearTimeout(timer);
  }, [open, scrollTo, markdown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-foreground/40 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="canon-title"
        className="flex h-[min(88vh,760px)] w-full max-w-3xl flex-col overflow-hidden rounded-card border border-border bg-surface shadow-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <h2 id="canon-title" className="min-w-0 flex-1 text-sm font-semibold">
            Canon
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-[8px] px-3 py-1.5 text-sm text-muted hover:text-foreground"
          >
            Close
          </button>
        </div>
        <div className="canon-doc min-h-0 flex-1 overflow-y-auto px-5 py-6">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ children }) => <h2 id={headingId(children)}>{children}</h2>,
              h3: ({ children }) => <h3 id={headingId(children)}>{children}</h3>,
              a: ({ href, children }) => {
                const isExternal = href?.startsWith("http");
                const resolved =
                  href && href.startsWith("/") ? withBasePath(href) : href;
                return (
                  <a
                    href={resolved}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {markdown}
          </Markdown>
        </div>
      </div>
    </div>
  );
}
