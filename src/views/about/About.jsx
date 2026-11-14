import usePageMeta from "../../hooks/usePageMeta";

export default function About() {
    usePageMeta();

    return (
        <main id="aboutMain">
            <div className="pageHead reveal">
                <h1 className="pageTitle">About me</h1>
                <p className="pageLede">
                    System administrator in training, with a web development
                    background.
                </p>
            </div>

            <div className="aboutBio reveal reveal-1">
                <div>
                    <p>
                        I started out as a web developer, building applications
                        with React, Symfony and Node.js. Over time I became more
                        interested in what runs underneath: servers, networks
                        and how everything stays up.
                    </p>
                    <br />
                    <p>
                        I&apos;m now training to become a system administrator.
                        At home I run my own infrastructure with Proxmox,
                        TrueNAS and Docker, which is where I practise most of
                        what I learn.
                    </p>
                </div>
            </div>

            <section className="aboutFocus">
                <article className="aboutFocusCard reveal reveal-2">
                    <span className="aboutFocusNum">01</span>
                    <h3>Systems</h3>
                    <p>
                        Installing and maintaining Linux servers, virtual
                        machines and containers.
                    </p>
                    <p className="aboutFocusTech">
                        Linux · Proxmox · Docker · TrueNAS
                    </p>
                </article>
                <article className="aboutFocusCard reveal reveal-3">
                    <span className="aboutFocusNum">02</span>
                    <h3>Networking</h3>
                    <p>
                        Configuring the firewall and managed switches on my
                        home network.
                    </p>
                    <p className="aboutFocusTech">
                        Zyxel · Firewall · Switching
                    </p>
                </article>
                <article className="aboutFocusCard reveal reveal-4">
                    <span className="aboutFocusNum">03</span>
                    <h3>Web development</h3>
                    <p>
                        My first field. Useful for understanding the
                        applications I host and for scripting.
                    </p>
                    <p className="aboutFocusTech">
                        React · Symfony · Node.js · SQL
                    </p>
                </article>
            </section>
        </main>
    );
}
