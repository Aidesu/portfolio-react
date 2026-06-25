import { Icon } from "@iconify/react";
import usePageMeta from "../../hooks/usePageMeta";

// Self-hosted services Carla runs at home. Edit freely.
const HOMELAB = [
    {
        name: "Home Assistant",
        icon: "simple-icons:homeassistant",
        role: "Home automation & routines",
        since: "2020",
        color: "#18BCF2",
    },
    {
        name: "Proxmox",
        icon: "simple-icons:proxmox",
        role: "Virtualisation VMs & containers",
        since: "2023",
        color: "#E57000",
    },
    {
        name: "TrueNAS",
        icon: "simple-icons:truenas",
        role: "Storage & backups",
        since: "2023",
        color: "#0095D5",
    },
    {
        name: "Ollama",
        icon: "simple-icons:ollama",
        role: "Local LLMs, wired into projects",
        color: "#FFFFFF",
    },
];

// My main workstation. CPU is real fill the rest ("—" placeholders).
const SETUP = [
    {
        label: "CPU",
        value: "Intel Core i7-9900K",
        icon: "mdi:cpu-64-bit",
        color: "#5BC0EB",
    },
    {
        label: "GPU",
        value: "RTX 3080",
        icon: "mdi:expansion-card",
        color: "#7AE582",
    },
    { label: "RAM", value: "32GB", icon: "mdi:memory", color: "#C160EF" },
    {
        label: "Storage",
        value: "3.5TB",
        icon: "mdi:harddisk",
        color: "#F2A65A",
    },
    {
        label: "Motherboard",
        value: "Aorus Z390",
        icon: "mdi:developer-board",
        color: "#5BC8F5",
    },
];

// Gear mounted in my rack: networking equipment and custom-built servers.
// `spec` is the minimal hardware config of each unit — edit freely.
const RACK = [
    {
        name: "Custom Server",
        kind: "Server",
        icon: "mdi:server",
        spec: "i7-6700 · 16GB DDR4 · 4TB RAID5",
        color: "#7AE582",
    },
    {
        name: "Raspberry Pi 4",
        kind: "Server",
        icon: "mdi:raspberry-pi",
        spec: "8GB RAM · ARM",
        color: "#E5466A",
    },
    {
        name: "Zyxel USG Flex 100",
        kind: "Network",
        icon: "mdi:firewall",
        spec: "Firewall / security gateway",
        color: "#C160EF",
    },
    {
        name: "Zyxel GS1900-48",
        kind: "Network",
        icon: "mdi:switch",
        spec: "48-port managed switch",
        color: "#5BC8F5",
    },
    {
        name: "TP-Link Switch",
        kind: "Network",
        icon: "mdi:switch",
        spec: "6-port Gigabit",
        color: "#7AE0C2",
    },
];

export default function About() {
    usePageMeta();

    return (
        <main id="aboutMain">
            <div className="pageHead reveal">
                <h1 className="pageTitle">About me</h1>
                <p className="pageLede">
                    Full-stack developer with a curiosity for everything behind
                    the screen.
                </p>
            </div>

            <div className="aboutBio reveal reveal-1">
                <div>
                    <p>
                        I&apos;m a developer who enjoys turning ideas into
                        practical and intuitive digital experiences. My work is
                        focused on web technologies, with a particular
                        appreciation for clean interfaces and thoughtful user
                        experiences.
                    </p>{" "}
                    <br></br>
                    <p>
                        Outside of development, I&apos;m constantly exploring
                        new technologies through personal projects. I enjoy
                        learning by experimenting, solving problems, and
                        understanding how things work beyond the surface.
                    </p>
                    <br></br>
                    <p>
                        For me, every project is an opportunity to learn,
                        improve, and build something meaningful.
                    </p>
                </div>
            </div>

            <section className="aboutFocus">
                <article className="aboutFocusCard reveal reveal-2">
                    <span className="aboutFocusNum">01</span>
                    <h3>Front-end</h3>
                    <p>
                        Building interfaces that feel intuitive and stay
                        readable as they grow with care for layout, motion and
                        the small details.
                    </p>
                    <p className="aboutFocusTech">
                        React · Next.js · Astro · JavaScript
                    </p>
                </article>
                <article className="aboutFocusCard reveal reveal-3">
                    <span className="aboutFocusNum">02</span>
                    <h3>Back-end &amp; data</h3>
                    <p>
                        APIs, auth and data models that hold together from
                        Symfony and Node services to relational and document
                        databases.
                    </p>
                    <p className="aboutFocusTech">
                        Symfony · Node.js · PHP · SQL / NoSQL
                    </p>
                </article>
                <article className="aboutFocusCard reveal reveal-4">
                    <span className="aboutFocusNum">03</span>
                    <h3>Infra &amp; self-hosting</h3>
                    <p>
                        Running real systems at home: virtualisation, storage
                        and automation the practical side of how software lives
                        in production.
                    </p>
                    <p className="aboutFocusTech">
                        Proxmox · TrueNAS · Home Assistant
                    </p>
                </article>
            </section>

            <div className="aboutSetup">
                <section className="aboutBlock reveal reveal-1">
                    <div className="aboutBlockHead">
                        <h2 className="aboutBlockTitle">My computer</h2>
                        <p className="aboutBlockLede">
                            What I build and run everything on.
                        </p>
                    </div>

                    <ul className="setupCard">
                        {SETUP.map((c) => (
                            <li
                                key={c.label}
                                className="setupRow"
                                style={{ "--c": c.color }}
                            >
                                <span className="setupIcon">
                                    <Icon icon={c.icon} />
                                </span>
                                <span className="setupLabel">{c.label}</span>
                                <span className="setupValue">{c.value}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="aboutBlock reveal reveal-2">
                    <div className="aboutBlockHead">
                        <h2 className="aboutBlockTitle">My rack</h2>
                        <p className="aboutBlockLede">
                            Networking gear and custom-built servers, always on.
                        </p>
                    </div>

                    <ul className="rackList">
                        {RACK.map((d) => (
                            <li
                                key={d.name}
                                className="rackCard"
                                style={{ "--c": d.color }}
                            >
                                <div className="rackCardHead">
                                    <span className="rackIcon">
                                        <Icon icon={d.icon} />
                                    </span>
                                    <span className="rackName">{d.name}</span>
                                    <span className="rackKind">{d.kind}</span>
                                </div>
                                <p className="rackSpec">{d.spec}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}
