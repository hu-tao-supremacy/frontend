import CardInterest from "./CardInterest.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";

interface PropTypes {
  imgHash: string,
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
  imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
  imgUrl: "https://picsum.photos/200",
  interestName: "Fun and Run"
};
