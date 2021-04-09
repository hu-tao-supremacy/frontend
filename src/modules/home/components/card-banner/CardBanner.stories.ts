import CardBanner from "./CardBanner.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import { Event } from "@/commons/Interfaces/index";

app.component("base-icon", BaseIcon);

interface PropTypes {
  event: Event;
}

export default {
  title: "Home/CardBanner",
  component: CardBanner
};

const Template: Story<PropTypes> = args => ({
  components: { CardBanner },
  setup() {
    return { args };
  },
  template: '<CardBanner v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  event: {
    title: "Chula Reuy Lei",
    tags: ["Engineering", "Food", "Education", "Fun"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.",
    location: "Engineering Faculty, Chula",
    date: "Sun, 14 Feb - 16 April",
    time: "10:00-18:00",
    imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    img: "https://picsum.photos/900",
    faculty: 'ISE'
  }
};
