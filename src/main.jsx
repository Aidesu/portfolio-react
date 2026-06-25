import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");
const app = (
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>
);

// Prerendered HTML present (production) → hydrate it. Empty shell (dev) → render.
if (root.firstElementChild) {
    hydrateRoot(root, app);
} else {
    createRoot(root).render(app);
}
