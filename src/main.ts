import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import BaseIcon from "./commons/UI/BaseIcon.vue";
import VClickOutside from "@/commons/utils/VClickOutside";
import VCalendar from "v-calendar";
import VueProgressBar from "@aacassandra/vue3-progressbar";

const app = createApp(App);

const options = {
  color: "red",
  failedColor: "#874b4b",
  thickness: "1.5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300
  },
  autoRevert: true,
  location: "top",
  inverse: false
};

app.use(VueProgressBar, options);
app.use(router);
app.use(VCalendar, {});

app.component("base-icon", BaseIcon);

app.directive("clickOutside", VClickOutside);

app.mount("#app");
