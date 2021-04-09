import CardEvent from "./CardEvent.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";
import { Event } from "@/commons/Interfaces/index";

interface PropTypes {
  events: Event;
}
export default {
  title: "Home/CardEvent",
  component: CardEvent
};

const Template: Story<PropTypes> = args => ({
  components: { CardEvent },
  setup() {
    return { args };
  },
  template: '<CardEvent v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  events: {
    title: "Chula Collective Investment",
    faculty: "Faculty of Engineering",
    day: 15,
    date: "15 Feb",
    month: "Feb",
    time: "10:00-18:00",
    imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    img: "https://picsum.photos/300",
    description: "Short description",
    tags: ["Tech"]
  }
};
