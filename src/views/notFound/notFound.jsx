import { Link, useLocation } from "react-router";
import usePageMeta from "../../hooks/usePageMeta";

export default function NotFound() {
    const { pathname } = useLocation();

    usePageMeta({
        title: "Page not found — Carla Deafiaa",
        description: "This page doesn't exist.",
        noindex: true,
    });

    return (
        <main id="notFoundMain">
            <div className="nfGlow" aria-hidden="true"></div>
            <section className="nfTrace reveal">
                <p className="nfEyebrow">
                    <span className="nfDot" aria-hidden="true"></span>
                    request failed
                </p>

                <div className="nfLog">
                    <p className="nfLogLine">
                        <span className="nfMethod">GET</span>
                        <span className="nfPath">{pathname}</span>
                    </p>
                    <p className="nfLogLine nfLogStatus">
                        <span className="nfArrow" aria-hidden="true">
                            →
                        </span>
                        <span className="nfCode">404</span>
                        <span className="nfStatusText">not found</span>
                    </p>
                </div>

                <h1 className="nfTitle">This page isn't on the map</h1>
                <p className="nfBody">
                    The route you followed doesn't exist on this site — it may
                    have moved, or it was never here. Let's get you back on a
                    known route.
                </p>

                <div className="nfCtas">
                    <Link to="/" className="btnPrimary">
                        Return home
                        <span className="btnArrow" aria-hidden="true">
                            →
                        </span>
                    </Link>
                    <Link to="/projects" className="btnGhost">
                        Browse projects
                    </Link>
                </div>
            </section>
        </main>
    );
}
