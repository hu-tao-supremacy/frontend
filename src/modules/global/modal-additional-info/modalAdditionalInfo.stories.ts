import ModalAdditionalInfo from "./ModalAdditionalInfo.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

app.component("base-icon", BaseIcon);

export default {
  title: "Global/ModalAdditionalInfo",
  component: ModalAdditionalInfo
};

interface PropTypes {
  eventTitle: string;
}

const Template: Story<PropTypes> = (args: any) => ({
  components: { ModalAdditionalInfo },
  setup() {
    return { args };
  },
  template: '<ModalAdditionalInfo v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  eventTitle: "CU Collective Investment"
};