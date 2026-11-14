// Single source of truth for per-route SEO metadata. Used by usePageMeta (client
// navigation) and by prerender.mjs (injected into each static HTML <head>).
export const SITE = "Carla Deafiaa";
export const DEFAULT_DESCRIPTION =
    "Carla Deafiaa, system administrator in training with a web development background.";

export const ROUTE_META = {
    "/": {
        title: `${SITE} · System Administrator`,
        description:
            "System administrator in training with a web development background. Linux, Proxmox, Docker and networking.",
    },
    "/about": {
        title: `About ${SITE}`,
        description:
            "Background and focus areas of Carla Deafiaa, system administrator in training.",
    },
    "/projects": {
        title: `Projects ${SITE}`,
        description:
            "Academic and personal projects by Carla Deafiaa: web apps and self-hosted services.",
    },
    "/skills": {
        title: `Skills ${SITE}`,
        description:
            "Tools and technologies Carla Deafiaa works with.",
    },
    "/contact": {
        title: `Contact ${SITE}`,
        description:
            "Contact Carla Deafiaa.",
    },
};
