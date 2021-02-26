import { Org } from "@/commons/Interfaces/index";
import CardOrganization from "./CardOrganization.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";

interface PropTypes {
  orgs: Org;
}
export default {
  title: "Home/CardOrganization",
  component: CardOrganization
};

const Template: Story<PropTypes> = args => ({
  components: { CardOrganization },
  setup() {
    return { args };
  },
  template: '<CardOrganization v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  orgs: {
    fullName: "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)",
    shortName: "SGCU",
    img:
      "https://scontent.fbkk22-6.fna.fbcdn.net/v/t1.0-9/147484347_3819070534802922_4929298246220081385_n.jpg?_nc_cat=102&ccb=3&_nc_sid=09cbfe&_nc_eui2=AeFi4rMh7Yw3qrsCMcaWiRlF6aoBGZo3Aa_pqgEZmjcBr-lDqtVr3_Nw9D1HnHa9jaWxAA8LHpnpABTuXdp3YF-j&_nc_ohc=2xxv2bLVx_0AX_1OVgC&_nc_ht=scontent.fbkk22-6.fna&oh=71b718d7148f60b83f2effa8b469b04a&oe=605694B7"
  }
};
