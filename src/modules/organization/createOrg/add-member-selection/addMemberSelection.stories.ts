import AddMemberSelection from "./AddMemberSelection.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import { User, Gender } from "@/apollo/types";

app.component("base-icon", BaseIcon);

export default {
  title: "create-org/AddMemberSelection",
  component: AddMemberSelection
};

interface PropTypes {
  user: User;
  isSelected: boolean;
  isOrgOwner: boolean;
}

const Template: Story<PropTypes> = args => ({
  components: { AddMemberSelection },
  setup() {
    return { args };
  },
  template: '<AddMemberSelection v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  user: {
    id: 1,
    firstName: "Elon",
    lastName: "Musk",
    profilePictureUrl: "https://picsum.photos/200",
    email: "613XXXX21@student.chula.ac.th",
    gender: Gender.M,
    isChulaStudent: true,
    didSetup: true,
    organizations: [],
    history: [],
    interests: []
  }
};
