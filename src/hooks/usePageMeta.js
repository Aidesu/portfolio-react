import { useEffect } from "react";
import { useLocation } from "react-router";
import { ROUTE_META, SITE, DEFAULT_DESCRIPTION } from "../seo/pageMeta";

function setMeta(attr, key, content) {
    let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
}

// Keeps the document <head> in sync on client-side navigation. Static routes
// resolve from ROUTE_META by path; dynamic/utility routes pass an override
// ({ title, description, noindex }). The initial <head> of each page is already
// baked in by prerender.mjs — this just updates it as the user navigates.
export default function usePageMeta(override) {
    const { pathname } = useLocation();
    const meta = override || ROUTE_META[pathname] || {};
    const title = meta.title || `${SITE} — Web Developer`;
    const description = meta.description || DEFAULT_DESCRIPTION;
    const noindex = !!meta.noindex;

    useEffect(() => {
        document.title = title;
        setMeta("name", "description", description);
        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);

        const robots = document.head.querySelector('meta[name="robots"]');
        if (noindex) setMeta("name", "robots", "noindex, follow");
        else if (robots) robots.remove();
    }, [title, description, noindex]);
}
