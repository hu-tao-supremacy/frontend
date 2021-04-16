import EventOrganizer from "./EventOrganizer.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import { Organization } from "@/apollo/types";

app.component("base-icon", BaseIcon);

export default {
  title: "Event/EventOrganizer",
  component: EventOrganizer
};

interface PropTypes {
  eventOrg: Organization;
  isSignin: boolean;
}

const Template: Story<PropTypes> = (args: any) => ({
  components: { EventOrganizer },
  setup() {
    return { args };
  },
  template: '<EventOrganizer v-bind="args" :style="{maxWidth:`300px`}"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  eventOrg: {
    profilePictureUrl: "https://picsum.photos/100",
    profilePictureHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    abbreviation: "SGCU",
    name: "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)",
    description: `<ORG - BIO>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque pulvinar ornare orci amet. Quis arcu rhoncus velit amet nulla eleifend tristique quis? `,
    facebookPage: "https://facebook.com"
  } as Organization,
  isSignin: false
};
