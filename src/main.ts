import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import BaseIcon from "./commons/UI/BaseIcon.vue";
import VClickOutside from "@/commons/utils/VClickOutside";

const app = createApp(App);

app.use(router);

app.component("base-icon", BaseIcon);

app.directive("clickOutside", VClickOutside);

app.mount("#app");
