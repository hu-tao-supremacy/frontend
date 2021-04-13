import { Gender, User } from "@/apollo/types";
import PersonalInfoDes from "./PersonalInfoDes.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";

export default {
  title: "EventRegister/PersonalInfoDes",
  component: PersonalInfoDes
};

interface PropTypes {
  user: User;
}

const Template: Story<PropTypes> = args => ({
  components: { PersonalInfoDes },
  setup() {
    return { args };
  },
  template: '<PersonalInfoDes v-bind="args"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  user: {
    firstName: "Summa",
    lastName: "Tongerring",
    email: "summa@tongerring.com",
    nickname: "Tong",
    chulaId: "613121321",
    address: "Germany love dad",
    phoneNumber: "0869696969",
    district: "Zuich",
    province: "Gerring",
    zipCode: "Bann of gerring",
    gender: Gender.M
  } as User
};
