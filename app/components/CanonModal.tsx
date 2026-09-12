"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import type { Pattern } from "@/content/patterns";
import { withBasePath } from "@/lib/basePath";

type Props = {
  markdown: string;
  open: boolean;
  onClose: () => void;
  onOpenPattern: (pattern: Pattern) => void;
  relatedByCanonAnchor: Map<string, Pattern[]>;
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

function RelatedCards({
  anchor,
  patterns,
  onOpenPattern,
}: {
  anchor: string;
  patterns: Pattern[];
  onOpenPattern: (pattern: Pattern) => void;
}) {
  if (patterns.length === 0) return null;

  return (
    <div className="related-cards" aria-label="Related cards">
      <div className="related-cards-title">Related cards</div>
      <div className="related-cards-list">
        {patterns.map((pattern) => {
          const canon = pattern.canon.find((entry) => entry.anchor === anchor);
          return (
            <button
              key={pattern.slug}
              type="button"
              className="related-card"
              onClick={() => onOpenPattern(pattern)}
            >
              <img src={withBasePath(pattern.thumb)} alt="" />
              <span>
                <strong>{pattern.title}</strong>
                <span>{canon?.note}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function CanonModal({
  markdown,
  open,
  onClose,
  onOpenPattern,
  relatedByCanonAnchor,
  scrollTo,
}: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function renderHeading(level: 2 | 3, children: ReactNode, id?: string) {
    const anchor = id || headingId(children);
    const related = relatedByCanonAnchor.get(anchor) ?? [];
    const Heading = level === 2 ? "h2" : "h3";

    return (
      <>
        <Heading id={anchor}>{children}</Heading>
        <RelatedCards anchor={anchor} patterns={related} onOpenPattern={onOpenPattern} />
      </>
    );
  }

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
    if (!open || !scrollTo || !scrollerRef.current) return;
    const root = scrollerRef.current;
    const timer = window.setTimeout(() => {
      root.querySelector(`#${CSS.escape(scrollTo)}`)?.scrollIntoView({
        block: "start",
      });
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
        <div ref={scrollerRef} className="canon-doc min-h-0 flex-1 overflow-y-auto px-5 py-6">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h2: ({ children, id }) => renderHeading(2, children, id),
              h3: ({ children, id }) => renderHeading(3, children, id),
              a: ({ href, children, id, ...props }) => {
                if (id && !href) {
                  return <a id={id} {...props} />;
                }
                const isExternal = href?.startsWith("http");
                const isHash = href?.startsWith("#");
                const resolved =
                  href && href.startsWith("/") ? withBasePath(href) : href;
                if (isHash && href) {
                  return (
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        const target = href.slice(1);
                        scrollerRef.current
                          ?.querySelector(`#${CSS.escape(target)}`)
                          ?.scrollIntoView({ block: "start", behavior: "smooth" });
                      }}
                      {...props}
                    >
                      {children}
                    </a>
                  );
                }
                return (
                  <a
                    href={resolved}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    {...props}
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
