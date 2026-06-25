// Static site generation for GitHub Pages: renders every route to a real HTML
// file (dist/about/index.html, dist/project/5/index.html, …) so crawlers and
// hard reloads get full content + per-page <head>, and the client hydrates it.
import fs from "node:fs";
import path from "node:path";
import { render } from "./dist-ssr/entry-server.js";
import { ROUTE_META, SITE, DEFAULT_DESCRIPTION } from "./src/seo/pageMeta.js";
import projects from "./src/data/projects.json" with { type: "json" };

const BASE = "https://deafiaa.com";
const template = fs.readFileSync("dist/index.html", "utf-8");

const esc = (s) =>
    String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

const clamp = (s) => {
    s = String(s || "").trim();
    return s.length > 160 ? s.slice(0, 157).trimEnd() + "…" : s;
};

const routes = [
    ...Object.entries(ROUTE_META).map(([url, meta]) => ({ url, meta })),
    ...projects.map((p) => ({
        url: `/project/${p.id}`,
        meta: {
            title: `${p.title} — ${SITE}`,
            description: clamp(p.comment || p.content || DEFAULT_DESCRIPTION),
        },
    })),
];

let n = 0;
for (const { url, meta } of routes) {
    const appHtml = render(url);
    const title = meta.title || `${SITE} — Web Developer`;
    const description = clamp(meta.description || DEFAULT_DESCRIPTION);
    const canonical = BASE + url;

    const html = template
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
        .replace(
            /(<meta name="description" content=")[^"]*(")/,
            `$1${esc(description)}$2`,
        )
        .replace(
            /(<meta property="og:title" content=")[^"]*(")/,
            `$1${esc(title)}$2`,
        )
        .replace(
            /(<meta property="og:description" content=")[^"]*(")/,
            `$1${esc(description)}$2`,
        )
        .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${canonical}$2`)
        .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${canonical}$2`);

    const outDir = url === "/" ? "dist" : path.join("dist", url.slice(1));
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), html);
    n++;
}

console.log(`✓ prerendered ${n} routes`);
