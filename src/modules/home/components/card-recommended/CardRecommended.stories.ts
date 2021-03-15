import CardRecommended from "./CardRecommended.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import { Event } from "@/commons/Interfaces/index";

app.component("base-icon", BaseIcon);

interface PropTypes {
  recommended: Event;
}
export default {
  title: "Home/CardRecommended",
  component: CardRecommended
};

const Template: Story<PropTypes> = args => ({
  components: { CardRecommended },
  setup() {
    return { args };
  },
  template: '<CardRecommended v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  recommended: {
    title: "Chula Collective Investment",
    faculty: "Faculty of Engineering",
    day: 15,
    month: "Feb",
    time: "10:00-18:00",
    imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    img: "https://picsum.photos/300"
  }
};
