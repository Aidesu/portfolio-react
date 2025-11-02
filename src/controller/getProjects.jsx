export default async function getProjects() {
    const url = "/data/projects.json";
    const response = await fetch(url);
    return await response.json();
}
