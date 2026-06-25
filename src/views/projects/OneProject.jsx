import { useEffect, useState } from "react";
import getProjects from "../../controller/getProjects";
import { useParams, Link } from "react-router";
import { Icon } from "@iconify/react";
import usePageMeta from "../../hooks/usePageMeta";

const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

function formatDate(d) {
    if (!d) return "";
    const [year, month] = d.split("-");
    if (!month) return year;
    return `${MONTHS[Number(month) - 1] ?? ""} ${year}`.trim();
}

function typeLabel(t) {
    return t ? t.charAt(0).toUpperCase() + t.slice(1) : "";
}

function techName(icon) {
    const raw = icon.includes(":") ? icon.split(":")[1] : icon;
    return raw.charAt(0).toUpperCase() + raw.slice(1);
}

// Tab label from an image's alt text: drop the project title (it's redundant
// on a project page) and fall back to "View N" when there's no alt.
function slideLabel(alt, index, title) {
    const fallback = `View ${index + 1}`;
    if (!alt || !alt.trim()) return fallback;
    let label = alt.trim();
    if (title) {
        const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        label = label
            .replace(new RegExp(escaped, "ig"), "")
            .replace(/\s{2,}/g, " ")
            .trim();
    }
    if (!label) return fallback;
    return label.charAt(0).toUpperCase() + label.slice(1);
}

export default function OneProject() {
    const params = useParams();
    const project =
        getProjects().find((p) => String(p.id) === String(params.id)) ?? false;
    const [current, setCurrent] = useState(0);

    usePageMeta(
        project
            ? {
                  title: `${project.title} — Carla Deafiaa`,
                  description: project.comment || project.content || "",
              }
            : { title: "Project not found — Carla Deafiaa", noindex: true },
    );

    // Reset the carousel when navigating between projects
    useEffect(() => {
        setCurrent(0);
    }, [params.id]);

    const images =
        project && project.img ? project.img.filter((i) => i.img_link) : [];

    return (
        <main id="oneProjectMain">
            <Link to="/projects" className="opBack">
                <span className="opBackArrow" aria-hidden="true">
                    ←
                </span>
                Back
            </Link>

            <div className="opContent">
                {project === false && (
                    <p className="opStatus">This project could not be found.</p>
                )}

                {project && (
                    <>
                        <div className="opHero reveal">
                            <div className="opHeroTop">
                                {project.logo && (
                                    <div className="opLogo">
                                        <img
                                            src={project.logo}
                                            alt={`${project.title} logo`}
                                        />
                                    </div>
                                )}
                                <div className="opHeroHeadings">
                                    <h1>{project.title}</h1>
                                    {project.comment && (
                                        <p className="opTagline">
                                            {project.comment}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="opGithub"
                                >
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>GitHub</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                    View on GitHub
                                </a>
                            )}
                        </div>

                        {images.length > 0 && (
                            <section
                                className="opCarousel reveal reveal-1"
                                aria-label={`${project.title} screenshots`}
                            >
                                {images.length > 1 && (
                                    <div className="opTabs" role="tablist">
                                        {images.map((img, i) => (
                                            <button
                                                type="button"
                                                key={img.img_id ?? i}
                                                role="tab"
                                                aria-selected={i === current}
                                                className={`opTab${
                                                    i === current
                                                        ? " active"
                                                        : ""
                                                }`}
                                                onClick={() => setCurrent(i)}
                                            >
                                                {slideLabel(
                                                    img.img_alt,
                                                    i,
                                                    project.title
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                <div className="opStage">
                                    {images.map((img, i) => (
                                        <figure
                                            key={img.img_id ?? i}
                                            className={`opSlide${
                                                i === current ? " active" : ""
                                            }`}
                                            aria-hidden={i !== current}
                                        >
                                            <img
                                                src={img.img_link}
                                                alt={
                                                    img.img_alt ||
                                                    `${project.title} screenshot ${
                                                        i + 1
                                                    }`
                                                }
                                                loading="lazy"
                                            />
                                        </figure>
                                    ))}
                                </div>
                            </section>
                        )}

                        <section className="opBody">
                            <article className="opAbout reveal reveal-2">
                                <h2>About this project</h2>
                                <p>
                                    {project.content ||
                                        project.comment ||
                                        "No description available yet."}
                                </p>
                            </article>

                            <aside className="opSidebar reveal reveal-3">
                                <div className="opPanel">
                                    <h2>Details</h2>
                                    <ul className="opDetails">
                                        {project.date && (
                                            <li>
                                                <span className="opDetailKey">
                                                    date
                                                </span>
                                                <span>
                                                    {formatDate(project.date)}
                                                </span>
                                            </li>
                                        )}
                                        {project.type && (
                                            <li>
                                                <span className="opDetailKey">
                                                    type
                                                </span>
                                                <span>
                                                    {typeLabel(project.type)}
                                                </span>
                                            </li>
                                        )}
                                        <li>
                                            <span className="opDetailKey">
                                                team
                                            </span>
                                            <span>
                                                {project.coop
                                                    ? "Collaboration"
                                                    : "Solo"}
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                {project.techno &&
                                    project.techno.length > 0 && (
                                        <div className="opPanel">
                                            <h2>Stack</h2>
                                            <ul className="opStack">
                                                {project.techno.map((t, i) => (
                                                    <li
                                                        key={`${t.techno_name}-${i}`}
                                                        className="opStackItem"
                                                        title={techName(
                                                            t.techno_name
                                                        )}
                                                    >
                                                        <Icon
                                                            icon={t.techno_name}
                                                        />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                            </aside>
                        </section>
                    </>
                )}
            </div>
        </main>
    );
}
