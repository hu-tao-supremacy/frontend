import OrgEventListCard from "./OrgEventListCard.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import { Event } from "@/commons/Interfaces";
import BaseIcon from "@/commons/UI/BaseIcon.vue";

app.component("base-icon", BaseIcon);

export default {
  title: "Org-Home/OrgEventListCard",
  component: OrgEventListCard
};

interface PropTypes {
  event: Event;
  status: string;
}

const Template: Story<PropTypes> = (args: any) => ({
  components: { OrgEventListCard },
  setup() {
    return { args };
  },
  template: '<OrgEventListCard v-bind="args" :style="{maxWidth:`960px`}"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  event: {
    title: "Information and Communication Event (ICE)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero pellentesque, hendrerit eros vitae, malesuada nisi. Nam tempus dolor vitae mauris luctus aliquet. Sed et finibus erat.",
    date: "Sun, 14 Feb - 16 April",
    day: 14,
    month: "Feb",
    time: "10:00 - 18:00",
    location: "Engineering Faculty, Chula",
    faculty: "ISE",
    imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    img: "https://picsum.photos/400",
    tags: ["Engineering", "Food", "Education"],
    attendeeLimit: 180,
    currentAttendee: 100
  },
  status: "Open"
};
