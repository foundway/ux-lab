import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { patterns } from "@/content/patterns";

type Params = { params: Promise<{ slug: string }> };

export async function GET(_request: Request, { params }: Params) {
  const { slug } = await params;
  const pattern = patterns.find((p) => p.slug === slug);
  if (!pattern) {
    return new NextResponse("Not found", { status: 404 });
  }

  const htmlPath = path.join(process.cwd(), "public", "patterns", slug, "index.html");
  const cssPath = path.join(process.cwd(), "public", "patterns", "pattern.css");
  const [html, css] = await Promise.all([
    readFile(htmlPath, "utf8"),
    readFile(cssPath, "utf8"),
  ]);

  const standalone = html.replace(
    /<link\s+rel="stylesheet"\s+href="\.\.\/pattern\.css"\s*\/?>/,
    `<style>\n${css}\n</style>`,
  );

  return new NextResponse(standalone, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="${slug}.html"`,
    },
  });
}
