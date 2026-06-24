import { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState(""); // "" | "sending" | "success" | "error"

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        setStatus("sending");
        setResult("Sending your message…");

        const formData = new FormData(form);
        formData.append("access_key", "5be9da9a-7b83-45d2-a123-db65d2e77ffa");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            if (data.success) {
                setStatus("success");
                setResult("Thanks! Your message is on its way.");
                form.reset();
            } else {
                setStatus("error");
                setResult("Something went wrong — please try again.");
            }
        } catch {
            setStatus("error");
            setResult("Network error — please try again.");
        }
    };

    return (
        <main id="contactMain">
            <h1>Contact</h1>
            <p className="contactLede">
                Got a project, a question, or an opportunity? Let's talk.
            </p>

            <div className="contactGrid">
                <aside className="contactAside">
                    <h2 className="contactHeadline">
                        Let's build something <span>together</span>.
                    </h2>
                    <p className="contactAsideText">
                        I'm always looking to take on new opportunities and
                        challenges. Drop a message and I'll get back to you as
                        soon as I can.
                    </p>
                    <div className="contactReach">
                        <span className="contactReachLabel">reach me on</span>
                        <ul className="contactSocials">
                            <li>
                                <a
                                    href="https://github.com/Aidesu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>GitHub</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/carla-deafiaa-96a58330a/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>LinkedIn</title>
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.85-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.354V9h3.414v1.561h.049c.477-.9 1.637-1.849 3.372-1.849 3.604 0 4.271 2.372 4.271 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.985 20.452H3.687V9h3.298v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>

                <form onSubmit={onSubmit} className="contactForm">
                    <div className="contactField">
                        <label htmlFor="name">
                            <span className="contactFieldNum">01</span> Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your first and last name"
                            required
                        />
                    </div>
                    <div className="contactField">
                        <label htmlFor="email">
                            <span className="contactFieldNum">02</span> Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                    <div className="contactField">
                        <label htmlFor="message">
                            <span className="contactFieldNum">03</span> Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project or idea…"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="contactSubmit"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? "Sending…" : "Send message"}
                    </button>
                    {result && (
                        <p className={`contactResult ${status}`} role="status">
                            {result}
                        </p>
                    )}
                </form>
            </div>
        </main>
    );
}
