import EventSchedule from "./EventSchedule.vue";
import "@/index.css";
import { Story } from "@storybook/vue3";
import { Schedule } from "@/commons/Interfaces/index";

export default {
  title: "Event/EventSchedule",
  component: EventSchedule
};

interface PropTypes {
  eventsSchedule: Schedule;
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
    eventsSchedule: {
        faculty: "TGR Faculty, Chula",
        day: 14,
        month: "Feb",
        time: "10:00-18:00"
    }
  };