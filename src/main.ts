import { createApp } from "vue";
import Framework7 from "framework7/lite-bundle";
import Framework7Vue, {
	f7App,
	f7View,
	f7Page,
	f7Navbar,
	f7Block,
} from "framework7-vue";
import "framework7/css/bundle";
import App from "./App.vue";

Framework7.use(Framework7Vue);

const app = createApp(App);
app.use(Framework7Vue);
app.component("f7-app", f7App);
app.component("f7-view", f7View);
app.component("f7-page", f7Page);
app.component("f7-navbar", f7Navbar);
app.component("f7-block", f7Block);
app.mount("#app");
