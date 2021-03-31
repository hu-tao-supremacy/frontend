import ModalAdditionalInfo from "./ModalAdditionalInfo.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import VClickOutside from "@/commons/utils/VClickOutside";

app.component("base-icon", BaseIcon);
app.directive("clickOutside", VClickOutside);

export default {
  title: "Authentication/ModalAdditionalInfo",
  component: ModalAdditionalInfo
};

interface PropTypes {}

const Template: Story<PropTypes> = args => ({
  components: { ModalAdditionalInfo },
  setup() {
    return { args };
  },
  template: '<ModalAdditionalInfo v-bind="args" />'
});

export const Primary = Template.bind({});
