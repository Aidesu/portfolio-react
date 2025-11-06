import { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "5be9da9a-7b83-45d2-a123-db65d2e77ffa");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    return (
        <main className="mainContact">
            <form onSubmit={onSubmit}>
                <h3>Contact me</h3>
                <ul>
                    <li>
                        <label htmlFor="name">Name : </label>
                        <input
                            type="text"
                            placeholder="Enter your first and last name here..."
                            name="name"
                            required
                        />
                    </li>
                    <li>
                        <label htmlFor="email">Email address : </label>
                        <input
                            type="email"
                            placeholder="Enter your email address here..."
                            name="email"
                            required
                        />
                    </li>
                    <li>
                        <label htmlFor="message">Your message : </label>
                        <textarea
                            name="message"
                            placeholder="Enter your message here..."
                            required
                        ></textarea>
                    </li>
                </ul>
                <button type="submit">Send</button>
                <p>{result}</p>
            </form>
        </main>
    );
}
