import OrgNavbarTeamSelection from "./OrgNavbarTeamSelection.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import VClickOutside from "@/commons/utils/VClickOutside";
import { Organization } from "@/apollo/types";

app.component("base-icon", BaseIcon);
app.directive("clickOutside", VClickOutside);

export default {
  title: "OrgNavbar/OrgNavbarTeamSelection",
  component: OrgNavbarTeamSelection
};

interface PropTypes {
  isExpand: boolean;
  organization: Organization;
  isSelected: boolean;
}

const Template: Story<PropTypes> = (args: any) => ({
  components: { OrgNavbarTeamSelection },
  setup() {
    return { args };
  },
  template: '<OrgNavbarTeamSelection v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  organization: {
    id: 1,
    name: "ThinkStation Club",
    profilePictureUrl: "https://picsum.photos/100",
    profilePictureHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    isVerified: false,
    events: []
  }
};
