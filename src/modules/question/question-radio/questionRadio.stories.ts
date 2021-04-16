import QuestionRadio from "./QuestionRadio.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

app.component("base-icon", BaseIcon);

export default {
  title: "Question/QuestionRadio",
  component: QuestionRadio
};

interface PropTypes {
  question: string;
}

const Template: Story<PropTypes> = args => ({
  components: { QuestionRadio },
  setup() {
    return { args };
  },
  template: `<QuestionRadio v-bind="args" :style="{maxWidth: '800px'}"/>`
});

export const Primary = Template.bind({});
Primary.args = {
  question: "I learned useful knowledge from these activities."
};
