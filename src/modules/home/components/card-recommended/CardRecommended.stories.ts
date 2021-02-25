import CardRecommended from "./CardRecommended.vue";
import "@/index.css";
import { app } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

app.component("base-icon", BaseIcon);

export default {
  title: "Home/CardRecommended",
  component: CardRecommended
};

const Template = (args: any) => ({
  components: { CardRecommended },
  setup() {
    return { args };
  },
  template: '<CardRecommended v-bind="args" />'
});

export const Primary = Template.bind({});
