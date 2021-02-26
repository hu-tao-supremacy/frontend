import CardBanner from "./CardBanner.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

app.component("base-icon", BaseIcon);

export default {
  title: "Home/CardBanner",
  component: CardBanner
};

interface PropTypes {
  eventTitle: string;
}

const Template: Story<PropTypes> = (args: any) => ({
  components: { CardBanner },
  setup() {
    return { args };
  },
  template: '<CardBanner v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  eventTitle: "CU Collective Investment"
};
