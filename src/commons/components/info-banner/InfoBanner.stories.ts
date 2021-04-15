import InfoBanner from "./InfoBanner.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import { EventDuration, GetEventByIdQuery } from "@/apollo/types";

app.component("base-icon", BaseIcon);

export default {
  title: "Event/InfoBanner",
  component: InfoBanner
};

interface PropTypes {
  eventBanner: GetEventByIdQuery["event"];
  isSignin: boolean;
}

const Template: Story<PropTypes> = (args: any) => ({
  components: { InfoBanner },
  setup() {
    return { args };
  },
  template: '<InfoBanner v-bind="args" :style="{maxWidth:`960px`}"/>'
});

export const Primary = Template.bind({});
Primary.args = {
  eventBanner: {
    coverImageUrl: "https://picsum.photos/1000",
    coverImageHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    posterImageUrl: "https://picsum.photos/500",
    posterImageHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    name: "Information and Communication Event (ICE)",
    tags: [
      { name: "Engineering", id: 1 },
      { name: "Food", id: 2 },
      { name: "Education", id: 3 }
    ],
    durations: [
      { start: new Date().toString(), finish: new Date().toString() }
    ] as EventDuration[],
    location: { name: "Engineering Faculty, Chula" }
  } as any,
  isSignin: false
};
