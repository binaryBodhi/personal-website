import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import ghPages from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		open: true,
		proxy: {
			"/api": {
				target: "http://localhost:8080",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	base: "/person-website/",

	// base: "/",
});
