import EventSchedule from "./EventSchedule.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";
import { EventDuration, Location } from "@/apollo/types";

export default {
  title: "Event/EventSchedule",
  component: EventSchedule
};

interface PropTypes {
  eventsSchedule: EventDuration;
  location: Location;
}

const Template: Story<PropTypes> = args => ({
  components: { EventSchedule },
  setup() {
    return { args };
  },
  template: '<EventSchedule v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  location: { name: "TGR Faculty, Chula" } as Location,
  eventsSchedule: {
    start: new Date().toString(),
    finish: new Date().toString()
  } as EventDuration
};
