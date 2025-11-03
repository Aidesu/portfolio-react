import { useEffect, useState } from "react";
import getProjects from "../../controller/getProjects";
import { useParams } from "react-router";

export default function OneProject() {
    const [projects, setProjects] = useState([]);
    const [project, setProject] = useState([]);
    const params = useParams();

    useEffect(() => {
        async function fetchData() {
            const response = await getProjects();
            setProjects(response);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (projects) {
            async function getProject() {
                const findProject = projects.find((p) => p.id == params.id);
                setProject(findProject);
            }
            getProject();
        }
    }, [projects, params.id]);

    console.log(project);

    return (
        <>
            <main>
                {project ? (
                    <>
                        <h1>{project.title}</h1>
                    </>
                ) : (
                    "Loading in progress..."
                )}
            </main>
        </>
    );
}
