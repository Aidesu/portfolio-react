export default async function getSkills() {
    try {
        const response = await fetch("/data/skills.json");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        // Aborted reloads, offline, or a bad response shouldn't crash the page.
        console.warn("Could not load skills:", error);
        return [];
    }
}
