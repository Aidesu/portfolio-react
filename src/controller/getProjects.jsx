import projects from "../data/projects.json";

// Static data, imported at build time so it's present in the prerendered HTML
// (and identical on client → clean hydration, no loading flash).
export default function getProjects() {
    return projects;
}
