import OrgBanner from "./OrgBanner.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import { Org } from "@/commons/Interfaces";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

app.component("base-icon", BaseIcon);

export default {
  title: "Org-Home/OrgBanner",
  component: OrgBanner
};

interface PropTypes {
  org: Org;
}

const Template: Story<PropTypes> = (args: any) => ({
  components: { OrgBanner },
  setup() {
    return { args };
  },
  template: '<OrgBanner v-bind="args" :style="{maxWidth:`960px`}"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  org: {
    img: "https://picsum.photos/100",
    imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    shortName: "SGCU",
    fullName: "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)",
    description: `<ORG - BIO>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque pulvinar ornare orci amet. Quis arcu rhoncus velit amet nulla eleifend tristique quis? `
  }
};
