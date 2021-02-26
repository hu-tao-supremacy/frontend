import EventOrganizer from "./EventOrganizer.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

app.component("base-icon", BaseIcon);

export default {
  title: "Event/EventOrganizer",
  component: EventOrganizer
};

interface PropTypes {
  eventOrg: {
    imgUrl: string;
    shortName: string;
    fullName: string;
    detail: string;
  };
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
    imgUrl: "https://picsum.photos/100",
    shortName: "SGCU",
    fullName: "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)",
    detail: `<ORG - BIO>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque pulvinar ornare orci amet. Quis arcu rhoncus velit amet nulla eleifend tristique quis? `
  }
};
