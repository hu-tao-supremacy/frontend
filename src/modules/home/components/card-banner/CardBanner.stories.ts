import CardBanner from "./CardBanner.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import {Banner} from "@/commons/Interfaces/index.ts"

app.component("base-icon", BaseIcon);

export default {
  title: "Home/CardBanner",
  component: CardBanner
};

const Template: Story<Banner> = args => ({
  components: { CardBanner },
  setup() {
    return { args };
  },
  template: '<CardBanner v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  title: "CU Collective Investment"
};
