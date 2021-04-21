import AddMemberModal from "./AddMemberModal.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import { User, Gender } from "@/apollo/types";

app.component("base-icon", BaseIcon);

export default {
  title: "create-org/AddMemberModal",
  component: AddMemberModal
};

interface PropTypes {
  selectedMembers: User[];
  searchedUsers: User[];
  orgOwner: User;
}

const Template: Story<PropTypes> = args => ({
  components: { AddMemberModal },
  setup() {
    return { args };
  },
  template: '<AddMemberModal v-bind="args" />'
});

const user = {
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
};

const userPoom = {
  id: 101,
  firstName: "Pattarapon",
  lastName: "Kittisrisawai",
  email: "6131837921@student.chula.ac.th",
  phoneNumber: "0812345678",
  isChulaStudent: true,
  didSetup: true,
  gender: Gender.M,
  organizations: [],
  history: [],
  interests: []
};

export const Primary = Template.bind({});
Primary.args = {
  selectedMembers: [userPoom],
  searchedUsers: [user, user, user],
  orgOwner: userPoom
};
