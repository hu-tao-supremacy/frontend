import RegistrationStatus from "./RegistrationStatus.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";

export default {
  title: "EventRegister/RegistrationStatus",
  component: RegistrationStatus
};

const Template: Story<number> = args => ({
  components: { RegistrationStatus },
  setup() {
    return { args };
  },
  template: '<RegistrationStatus v-bind="args"/>'
});

export const Primary = Template.bind({});
Primary.args = 1;
