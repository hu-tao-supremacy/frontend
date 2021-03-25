import Ticket from "./Ticket.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import { Event, Org } from "@/commons/Interfaces/index";

app.component("base-icon", BaseIcon);

interface PropTypes {
  event: Event;
  organization: Org;
  ticketID: String;
  bgColor: String;
}

export default {
  title: "Wallet/Ticket",
  component: Ticket
};

const Template: Story<PropTypes> = args => ({
  components: { Ticket },
  setup() {
    return { args };
  },
  template: `<Ticket v-bind="args" :style="{maxWidth: '832px'}"/>`
});

export const Primary = Template.bind({});
Primary.args = {
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
        description: '<ORG - BIO>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque pulvinar ornare orci amet. Quis arcu rhoncus velit amet nulla eleifend tristique quis? '
      },
      ticketID: "175FD57",
      bgColor: 'bg-gray-1'
  }
};