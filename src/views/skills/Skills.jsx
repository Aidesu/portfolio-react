import getSkills from "../../controller/getSkills";
import { Icon } from "@iconify/react";
import usePageMeta from "../../hooks/usePageMeta";

// Preferred display order + labels for the known stack layers.
// Any extra category found in skills.json is appended automatically,
// so new categories can be added in the data without touching this file.
const CATEGORY_ORDER = [
    { key: "frontend", label: "frontend" },
    { key: "backend", label: "backend" },
    { key: "mobile", label: "mobile" },
    { key: "database", label: "database" },
    { key: "devops", label: "devops" },
];

export default function Skills() {
    usePageMeta();

    const skills = getSkills();

    // Known layers first, then any other category present in the data.
    const knownKeys = CATEGORY_ORDER.map((c) => c.key);
    const extraCats = [...new Set(skills.map((s) => s.category))]
        .filter((k) => k && !knownKeys.includes(k))
        .map((k) => ({ key: k, label: k }));

    // Build the panels, dropping empty layers.
    // `score` is never shown — it only ranks skills within a layer.
    const groups = [...CATEGORY_ORDER, ...extraCats]
        .map((cat) => ({
            ...cat,
            items: skills
                .filter((s) => s.category === cat.key)
                .sort((a, b) => Number(b.score) - Number(a.score)),
        }))
        .filter((g) => g.items.length);

    return (
        <main id="skillsMain">
            <div className="pageHead reveal">
                <h1 className="pageTitle">Skills</h1>
                <p className="pageLede">
                    From the interface down to the server it runs on.
                </p>
            </div>

            <div className="skillsBento">
                {groups.map((g, i) => (
                    <section
                        key={g.key}
                        className="skillPanel reveal"
                        style={{ "--rd": `${0.06 + i * 0.07}s` }}
                    >
                        <div className="skillPanelHead">
                            <span className="skillPanelPath">{g.label}</span>
                            <span className="skillPanelCount">
                                {String(g.items.length).padStart(2, "0")}
                            </span>
                        </div>
                        <ul className="skillPanelList">
                            {g.items.map((s) => (
                                <li
                                    key={s.name}
                                    className="skillItem"
                                    style={{ "--c": s.color }}
                                >
                                    <span className="skillItemIcon">
                                        <Icon icon={s.icon} />
                                    </span>
                                    <span className="skillItemName">
                                        {s.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    );
}
