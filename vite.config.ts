import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	base: "./",
	plugins: [
		react(),
		tsconfigPaths(),
		svgr({
			svgrOptions: { exportType: "default" }
		})
	],
	resolve: {
		alias: {
			src: path.resolve(__dirname, "./src")
		}
	},
	server: {
		host: true,
		port: 5000
	}
});
