import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Varlet from "@varlet/ui";
import "@varlet/ui/es/style";
import jQuery from "jquery";

const $ = jQuery;
window.$ = $;

createApp(App).use(store).use(router).use(Varlet).mount("#app");
