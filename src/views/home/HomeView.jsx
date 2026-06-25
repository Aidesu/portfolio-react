import { Link } from "react-router";

export default function HomeView() {
    return (
        <main id="homeMain">
            <div className="homeGlow" aria-hidden="true"></div>
            <section className="homeHero">
                <div className="homeIntro animSlideL">
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
                        I continuously enhance my skills to stay at the forefront
                        of technology and deliver innovative solutions. Learning
                        and adapting are part of my daily routine, and I am ready
                        to fully commit to new opportunities.
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
                <div className="homePortrait animSlideR">
                    <img src="/pfpCarla.jpg" alt="Carla Deafiaa" />
                </div>
            </section>
        </main>
    );
}
