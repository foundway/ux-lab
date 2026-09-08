import { withBasePath } from "@/lib/basePath";

/** Fetch pattern HTML + shared CSS, inline CSS, trigger a file download. */
export async function downloadPatternHtml(slug: string, htmlPath: string) {
  const [htmlRes, cssRes] = await Promise.all([
    fetch(withBasePath(htmlPath)),
    fetch(withBasePath("/patterns/pattern.css")),
  ]);

  if (!htmlRes.ok || !cssRes.ok) {
    throw new Error("Could not load pattern files for download.");
  }

  const [html, css] = await Promise.all([htmlRes.text(), cssRes.text()]);
  const standalone = html.replace(
    /<link\s+rel="stylesheet"\s+href="\.\.\/pattern\.css"\s*\/?>/,
    `<style>\n${css}\n</style>`,
  );

  const blob = new Blob([standalone], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${slug}.html`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
