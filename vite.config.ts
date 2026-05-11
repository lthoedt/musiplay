import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		vue(),
		VitePWA({
			injectRegister: "auto",
			registerType: "autoUpdate",
			manifest: {
				name: "musiplay",
				short_name: "musiplay",
				description: "Minimal Vue + Framework7 app",
				theme_color: "#1f2937",
				background_color: "#ffffff",
				display: "standalone",
				icons: [
					{
						src: "/icon.svg",
						sizes: "any",
						type: "image/svg+xml",
					},
				],
			},
		}),
	],
});
