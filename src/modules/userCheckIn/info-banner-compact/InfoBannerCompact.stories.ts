import InfoBannerTransparent from "./InfoBannerTransparent.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";

export default {
  title: "UserCheckIn/InfoBannerTransparent",
  component: InfoBannerTransparent
};

interface PropTypes {
  eventBanner: {
    profileImg: string;
    profileImgHash: string;
    title: string;
    tags: string[];
    date: string;
    time: string;
    location: string;
  };
}

const Template: Story<PropTypes> = args => ({
  components: { InfoBannerTransparent },
  setup() {
    return { args };
  },
  template: '<InfoBannerTransparent v-bind="args" :style="{maxWidth:`960px`}"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  eventBanner: {
    profileImg: "https://picsum.photos/500",
    profileImgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    title: "Information and Communication Event (ICE)",
    tags: ["Engineering", "Food", "Education"],
    date: "Sun, 14 Feb - 16 April",
    time: "10:00 -18:00",
    location: "Engineering Faculty, Chula"
  }
};
