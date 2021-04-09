import QuestionStar from "./QuestionStar.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

app.component("base-icon", BaseIcon);

export default {
  title: "Question/QuestionStar",
  component: QuestionStar
};

const Template: Story<Record<string, any>> = args => ({
  components: { QuestionStar },
  setup() {
    return { args };
  },
  template: `<QuestionStar v-bind="args" :style="{maxWidth: '800px'}"/>`
});

export const Primary = Template.bind({});
