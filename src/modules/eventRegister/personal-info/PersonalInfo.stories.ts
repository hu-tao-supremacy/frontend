import { Gender, User } from "@/apollo/types";
import PersonalInfo from "./PersonalInfo.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";

export default {
  title: "EventRegister/PersonalInfo",
  component: PersonalInfo
};

interface PropTypes {
  user: User;
}

const Template: Story<PropTypes> = args => ({
  components: { PersonalInfo },
  setup() {
    return { args };
  },
  template: '<PersonalInfo v-bind="args"/>'
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
