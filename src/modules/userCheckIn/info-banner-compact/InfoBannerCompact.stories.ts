import InfoBannerCompact from "./InfoBannerCompact.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";

export default {
  title: "UserCheckIn/InfoBannerCompact",
  component: InfoBannerCompact
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
  components: { InfoBannerCompact },
  setup() {
    return { args };
  },
  template: '<InfoBannerCompact v-bind="args" :style="{maxWidth:`960px`}"/>'
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
