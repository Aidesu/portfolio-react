import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // Deployed at the root of the custom domain (deafiaa.com) → absolute base so
    // assets resolve correctly even on deep routes like /project/5.
    base: "/",
});
