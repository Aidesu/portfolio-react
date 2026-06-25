export default async function getProjects() {
    try {
        const response = await fetch("/data/projects.json");
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        // Aborted reloads, offline, or a bad response shouldn't crash the page.
        console.warn("Could not load projects:", error);
        return [];
    }
}
