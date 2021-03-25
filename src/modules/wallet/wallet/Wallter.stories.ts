import Wallet from "./Wallet.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import { Profile, Ticket } from "@/commons/Interfaces/index";

app.component("base-icon", BaseIcon);

interface PropTypes {
  profile: Profile;
  ongoingTickets: Ticket[];
  historyTickets: Ticket[];
}

export default {
  title: "Wallet/Wallet",
  component: Wallet
};

const Template: Story<PropTypes> = args => ({
  components: { Wallet },
  setup() {
    return { args };
  },
  template: `<Wallet v-bind="args" :style="{maxWidth: '960px'}"/>`
});

const ticket = {
  event: {
    title: "Information and Communication Event (ICE)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero pellentesque, hendrerit eros vitae, malesuada nisi. Nam tempus dolor vitae mauris luctus aliquet. Sed et finibus erat.",
    date: "Sun, 14 Feb - 16 April",
    time: "10:00 - 18:00",
    location: "Engineering Faculty, Chula",
    faculty: "ISE",
    imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    img: "https://picsum.photos/400",
    tags: ["Engineering", "Food", "Education"]
  },
  organization: {
    img: "https://picsum.photos/100",
    imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    shortName: "SGCU",
    fullName: "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)",
    description:
      "<ORG - BIO>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque pulvinar ornare orci amet. Quis arcu rhoncus velit amet nulla eleifend tristique quis? "
  },
  ticketID: "175FD57",
  bgColor: "bg-gray-1"
};

export const Primary = Template.bind({});
Primary.args = {
  profile: {
    firstName: "Elon",
    lastName: "Musk",
    img: "https://picsum.photos/200",
    imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    email: "613XXXX21@student.chula.ac.th",
    like: 16,
    ticket: 24,
    following: 48
  },
  ongoingTickets: [ticket, ticket, ticket],
  historyTickets: [ticket, ticket]
};
