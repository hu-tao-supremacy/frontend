import InfoBanner from "./InfoBanner.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

app.component("base-icon", BaseIcon);

export default {
  title: "Event/InfoBanner",
  component: InfoBanner
};

interface PropTypes {
  eventBanner: {
    bannerImg: string;
    profileImg: string;
    title: string;
    tags: string[];
    date: string;
    time: string;
    location: string;
  };
}

const Template: Story<PropTypes> = (args: any) => ({
  components: { InfoBanner },
  setup() {
    return { args };
  },
  template: '<InfoBanner v-bind="args" :style="{maxWidth:`960px`}"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  eventBanner: {
    bannerImg: "https://picsum.photos/1000",
    profileImg: "https://picsum.photos/500",
    title: "Information and Communication Event (ICE)",
    tags: ["Engineering", "Food", "Education"],
    date: "Sun, 14 Feb - 16 April",
    time: "10:00 -18:00",
    location: "Engineering Faculty, Chula"
  }
};
