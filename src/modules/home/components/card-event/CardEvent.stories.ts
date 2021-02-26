import CardEvent from "./CardEvent.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";
import { Event } from "@/commons/Interfaces/index.ts";

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
    month: "Feb",
    time: "10:00-18:00",
    img: "https://picsum.photos/300"
  }
};
