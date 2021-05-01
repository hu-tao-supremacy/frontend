import CreateOrgForm from "./CreateOrgForm.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import VClickOutside from "@/commons/utils/VClickOutside";

app.component("base-icon", BaseIcon);
app.directive("clickOutside", VClickOutside);

export default {
  title: "create-org/CreateOrgForm",
  component: CreateOrgForm
};

const Template: Story = args => ({
  components: { CreateOrgForm },
  setup() {
    return { args };
  },
  template: '<CreateOrgForm v-bind="args" />'
});

export const Primary = Template.bind({});
