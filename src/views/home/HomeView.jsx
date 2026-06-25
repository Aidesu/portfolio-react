import { Link } from "react-router";

export default function HomeView() {
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
                    <h3 className="homeRole">
                        <span>Web</span> Developer
                    </h3>
                    <h1>Carla Deafiaa</h1>
                    <p className="homeBio">
                        Fullstack developer passionate about building modern web
                        applications, solving problems, and continuously
                        improving my skills.
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
