// Single source of truth for per-route SEO metadata. Used by usePageMeta (client
// navigation) and by prerender.mjs (injected into each static HTML <head>).
export const SITE = "Carla Deafiaa";
export const DEFAULT_DESCRIPTION =
    "Carla Deafiaa — full-stack web developer building modern, thoughtful web applications. Self-hosting and home-lab enthusiast.";

export const ROUTE_META = {
    "/": {
        title: `${SITE} — Web Developer`,
        description:
            "Full-stack web developer building modern, thoughtful web applications. Self-hosting and home-lab enthusiast.",
    },
    "/about": {
        title: `About — ${SITE}`,
        description:
            "Full-stack developer with a curiosity for everything behind the screen — focus areas, home workstation and a self-hosted rack.",
    },
    "/projects": {
        title: `Projects — ${SITE}`,
        description:
            "Academic and personal projects by Carla Deafiaa — web apps, tools and self-hosted services.",
    },
    "/skills": {
        title: `Skills — ${SITE}`,
        description:
            "The full stack Carla Deafiaa works with, from the interface down to the server it runs on.",
    },
    "/contact": {
        title: `Contact — ${SITE}`,
        description:
            "Get in touch with Carla Deafiaa about a project, a question, or an opportunity.",
    },
};
