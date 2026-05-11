/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

declare module "*.vue" {
	import type { DefineComponent } from "vue";
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module "virtual:pwa-register" {
	export function registerSW(options?: {
		immediate?: boolean;
		onNeedRefresh?: () => void;
		onOfflineReady?: () => void;
		onRegistered?: (
			registration: ServiceWorkerRegistration | undefined,
		) => void;
		onRegisteredSW?: (
			swScriptUrl: string,
			registration: ServiceWorkerRegistration | undefined,
		) => void;
		onRegisterError?: (error: unknown) => void;
	}): (reloadPage?: boolean) => Promise<void>;
}
