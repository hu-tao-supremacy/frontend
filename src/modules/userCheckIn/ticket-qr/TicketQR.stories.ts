import TicketQR from "./TicketQR.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";

export default {
  title: "UserCheckIn/TicketQR",
  component: TicketQR
};


interface PropTypes {
  ticket: {
    id: string;
    profileImg: string;
    profileImgHash: string;
    ownerName: string;
    ownerEmail: string;
    ownerPhone: string;
  };
}

const Template: Story<PropTypes> = args => ({
  components: { TicketQR },
  setup() {
    return { args };
  },
  template: '<TicketQR v-bind="args" :style="{maxWidth:`960px`}"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  ticket: {
    id: "175FD57",
    profileImg:
      "https://cdn.myanimelist.net/images/userimages/10056043.jpg?t=1616259000",
    profileImgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    ownerName: "Summa Tongerring",
    ownerEmail: "6969669699@student.chula.ac.th",
    ownerPhone: "0893213393"
  }
};
