import { Link } from "react-router";
import usePageMeta from "../../hooks/usePageMeta";

export default function HomeView() {
    usePageMeta();

    return (
        <main id="homeMain">
            <section className="homeHero">
                <div className="homeIntro reveal">
                    <p className="homeStatus">
                        <span
                            className="homeStatusDot"
                            aria-hidden="true"
                        ></span>
                        Available for new opportunities
                    </p>
                    <p className="homeRole">
                        <span>System</span> Administrator
                    </p>
                    <h1>Carla Deafiaa</h1>
                    <p className="homeBio">
                        Currently training as a system administrator. I come
                        from web development and run my own servers at home.
                    </p>
                    <div className="homeCtas">
                        <Link to="/projects" className="btnPrimary">
                            View my work
                            <span className="btnArrow" aria-hidden="true">
                                →
                            </span>
                        </Link>
                        <Link to="/contact" className="btnGhost">
                            Get in touch
                        </Link>
                    </div>
                </div>
                <div className="homePortrait reveal reveal-2">
                    <img src="/pfpCarla.jpg" alt="Carla Deafiaa" />
                </div>
            </section>
        </main>
    );
}
