import QuestionText from "./QuestionText.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

app.component("base-icon", BaseIcon);

export default {
  title: "Question/QuestionText",
  component: QuestionText
};

interface PropTypes {
  question: string;
}

const Template: Story<PropTypes> = args => ({
  components: { QuestionText },
  setup() {
    return { args };
  },
  template: `<QuestionText v-bind="args" :style="{maxWidth: '800px'}"/>`
});

export const Primary = Template.bind({});
Primary.args = {
  question: "What you like in these activities?"
};
