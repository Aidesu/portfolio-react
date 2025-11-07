import { useEffect, useState } from "react";
import getProjects from "../../controller/getProjects";
import { useParams } from "react-router";
import { Icon } from "@iconify/react";
import { Link } from "react-router";

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
            <Link to={"/projects"}>
                <button id="backBtn">Back</button>
            </Link>
            <main id="oneProjectMain">
                {project ? (
                    <>
                        <section>
                            <article>
                                <h1>{project.title}</h1>
                                <p>{project.comment}</p>
                                {project.img ? (
                                    <div>
                                        <img
                                            src={project.img[0].img_link}
                                            alt={project.img[0].img_alt}
                                        />
                                    </div>
                                ) : (
                                    ""
                                )}
                            </article>
                            <article>
                                <h2>Stack</h2>
                                <ul>
                                    {project.techno
                                        ? project.techno.map((t) => (
                                              <li>
                                                  <Icon
                                                      icon={t.techno_name}
                                                  ></Icon>
                                              </li>
                                          ))
                                        : ""}
                                </ul>
                            </article>
                        </section>
                        <section>
                            <article>
                                <h2>Comment</h2>
                                <p>{project.content}</p>
                            </article>
                        </section>
                    </>
                ) : (
                    "Loading in progress..."
                )}
            </main>
        </>
    );
}
