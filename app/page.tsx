import { readFile } from "node:fs/promises";
import path from "node:path";
import { patterns } from "@/content/patterns";
import { Gallery } from "./components/Gallery";

export default async function Home() {
  const canonMarkdown = await readFile(path.join(process.cwd(), "CANON.md"), "utf8");
  return <Gallery patterns={patterns} canonMarkdown={canonMarkdown} />;
}
