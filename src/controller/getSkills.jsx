import skills from "../data/skills.json";

// Static data, imported at build time so it's present in the prerendered HTML
// (and identical on client → clean hydration, no loading flash).
export default function getSkills() {
    return skills;
}
