import EventCarousel from "./EventCarousel.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import { Event } from "@/commons/Interfaces/index";

app.component("base-icon", BaseIcon);

interface PropTypes {
  eventsList: Event[];
}

export default {
  title: "Home/EventCarousel",
  component: EventCarousel
};

const Template: Story<PropTypes> = args => ({
  components: { EventCarousel },
  setup() {
    return { args };
  },
  template: '<EventCarousel v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
    eventsList: [
        {
          title: "Chula Reuy",
          tags: ["Engineering", "Food", "Education", "Fun"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.",
          location: "Engineering Faculty, Chula",
          date: "Sun, 14 Feb - 16 April",
          time: "10:00-18:00",
          imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
          img: "https://picsum.photos/1000"
        },
        {
          title: "Chula Reuy Mak",
          tags: ["Engineering", "Food", "Education", "Fun"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.",
          location: "Engineering Faculty, Chula",
          date: "Sun, 14 Feb - 16 April",
          time: "10:00-18:00",
          imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
          img: "https://picsum.photos/1100"
        },
        {
          title: "Chula Reuy Lei",
          tags: ["Engineering", "Food", "Education", "Fun"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.",
          location: "Engineering Faculty, Chula",
          date: "Sun, 14 Feb - 16 April",
          time: "10:00-18:00",
          imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
          img: "https://picsum.photos/900"
        },
        {
          title: "Chula Jeng",
          tags: ["Engineering", "Food", "Education", "Fun"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velnisi eu ipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus cursus. Nulla sollicitudin ut felis sit amet blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel nisi euipsum elementum sollicitudin. Suspendisse aliquam arcu quis cursus          cursus. Nulla sollicitudin ut felis sit amet blandit.",
          location: "Engineering Faculty, Chula",
          date: "Sun, 14 Feb - 16 April",
          time: "10:00-18:00",
          imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
          img: "https://picsum.photos/1200"
        }
      ]
};
