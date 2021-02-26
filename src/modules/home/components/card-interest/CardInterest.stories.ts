import CardInterest from "./CardInterest.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";

interface PropTypes {
  imgUrl: string;
  interestName: string;
}
export default {
  title: "Home/CardInterest",
  component: CardInterest
};

const Template: Story<PropTypes> = args => ({
  components: { CardInterest },
  setup() {
    return { args };
  },
  template: '<CardInterest v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  imgUrl: "https://picsum.photos/200",
  interestName: "Fun and Run"
};
