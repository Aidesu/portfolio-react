export default function About() {
    return (
        <main id="aboutMain">
            <div className="pageHead">
                <h1 className="pageTitle">About me</h1>
                <p className="pageLede">
                    Front-end developer by taste, full-stack by curiosity — and
                    the person who hosts the servers it all runs on.
                </p>
            </div>

            <div className="aboutBio animSlideBF">
                <p>
                    I&apos;m a web &amp; mobile developer with a{" "}
                    <strong>soft spot for the front-end</strong>. React,
                    JavaScript, a bit of Next and Astro — I care about interfaces
                    that feel obvious to use and hold up once real data hits them.
                    When a project needs more, I reach for Symfony, Node, or
                    Flutter and build the rest myself.
                </p>
                <p>
                    What I&apos;m most proud of doesn&apos;t fit in a framework
                    list: I&apos;ve <strong>run my own home lab since 2020</strong>
                    . Home Assistant automating the house, TrueNAS keeping the
                    data safe, Proxmox virtualising the whole thing — even a local
                    LLM through Ollama that I later wired into one of my projects.
                    Breaking and fixing real systems taught me more about how
                    software behaves than any tutorial could.
                </p>
                <p>
                    I like the unglamorous parts — a data model that won&apos;t
                    fight you later, a UI that stays calm under complexity, code
                    the next person can actually read.{" "}
                    <strong>I&apos;d rather stay curious than comfortable</strong>:
                    every project is an excuse to pick up something I didn&apos;t
                    know last month.
                </p>
            </div>

            <section className="aboutFocus">
                <article className="aboutFocusCard">
                    <span className="aboutFocusNum">01</span>
                    <h3>Front-end</h3>
                    <p>
                        Building interfaces that feel intuitive and stay readable
                        as they grow — with care for layout, motion and the small
                        details.
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
