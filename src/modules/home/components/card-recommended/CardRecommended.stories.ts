import CardRecommended from "./CardRecommended.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import {Event} from "@/commons/Interfaces/index.ts"

app.component("base-icon", BaseIcon);

export default {
  title: "Home/CardRecommended",
  component: CardRecommended
};

const Template: Story<Event> = args => ({
  components: { CardRecommended },
  setup() {
    return { args };
  },
  template: '<CardRecommended v-bind="args" />'
});

export const Primary = Template.bind({});
