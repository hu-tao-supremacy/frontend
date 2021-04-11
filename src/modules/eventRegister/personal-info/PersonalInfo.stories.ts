import { Gender, User } from "./../../../apollo/types.d";
import PersonalInfo from "./PersonalInfo.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";
import { provide } from "vue";
import apolloClient from "@/apollo/client";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { userSymbol } from "@/modules/authentication/constant";
import useUserHooks from "@/modules/authentication/useUser";

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
    provide(DefaultApolloClient, apolloClient);
    provide(userSymbol, useUserHooks());
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
