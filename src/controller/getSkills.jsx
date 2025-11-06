export default async function getSkills() {
    const url = "/data/skills.json";
    const response = await fetch(url);
    return await response.json();
}
