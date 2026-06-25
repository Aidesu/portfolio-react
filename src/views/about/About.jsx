export default function About() {
    return (
        <main id="aboutMain">
            <div className="pageHead">
                <h1 className="pageTitle">About me</h1>
                <p className="pageLede">
                    Full-stack developer with a curiosity for everything behind
                    the screen.
                </p>
            </div>

            <div className="aboutBio animSlideBF">
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
                <article className="aboutFocusCard">
                    <span className="aboutFocusNum">01</span>
                    <h3>Front-end</h3>
                    <p>
                        Building interfaces that feel intuitive and stay
                        readable as they grow — with care for layout, motion and
                        the small details.
                    </p>
                    <p className="aboutFocusTech">
                        React · Next.js · Astro · JavaScript
                    </p>
                </article>
                <article className="aboutFocusCard">
                    <span className="aboutFocusNum">02</span>
                    <h3>Back-end &amp; data</h3>
                    <p>
                        APIs, auth and data models that hold together — from
                        Symfony and Node services to relational and document
                        databases.
                    </p>
                    <p className="aboutFocusTech">
                        Symfony · Node.js · PHP · SQL / NoSQL
                    </p>
                </article>
                <article className="aboutFocusCard">
                    <span className="aboutFocusNum">03</span>
                    <h3>Infra &amp; self-hosting</h3>
                    <p>
                        Running real systems at home: virtualisation, storage,
                        automation and local AI — the practical side of how
                        software lives in production.
                    </p>
                    <p className="aboutFocusTech">
                        Proxmox · TrueNAS · Home Assistant · Ollama
                    </p>
                </article>
            </section>
        </main>
    );
}
