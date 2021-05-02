import ModalInterests from "./ModalInterests.vue";
import "@/index.css";
import { app, Story } from "@storybook/vue3";
import BaseIcon from "@/commons/UI/BaseIcon.vue";
import { Interest } from "@/commons/Interfaces/index";

app.component("base-icon", BaseIcon);

interface PropTypes {
  interests: Interest[];
}

export default {
  title: "Authentication/ModalInterests",
  component: ModalInterests
};

const Template: Story<PropTypes> = args => ({
  components: { ModalInterests },
  setup() {
    return { args };
  },
  template: '<ModalInterests v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
  interests: [
    {
      id: 1,
      name: "Music & Festival",
      posterImageUrl: "https://picsum.photos/200"
    },
    {
      id: 2,
      name: "Online Event",
      posterImageUrl: "https://picsum.photos/201"
    },
    {
      id: 3,
      name: "Stories",
      posterImageUrl: "https://picsum.photos/202"
    },
    {
      id: 4,
      name: "Education",
      posterImageUrl: "https://picsum.photos/203"
    },
    {
      id: 5,
      name: "IT & Technology",
      posterImageUrl: "https://picsum.photos/204"
    },
    {
      id: 6,
      name: "Internship",
      posterImageUrl: "https://picsum.photos/205"
    },
    {
      id: 7,
      name: "Investment",
      posterImageUrl: "https://picsum.photos/206"
    },
    {
      id: 8,
      name: "Art & Design",
      posterImageUrl: "https://picsum.photos/207"
    },
    {
      id: 9,
      name: "Sport",
      posterImageUrl: "https://picsum.photos/208"
    },
    {
      id: 10,
      name: "Seft-growth",
      posterImageUrl: "https://picsum.photos/209"
    },
    {
      id: 11,
      name: "Gaming",
      posterImageUrl: "https://picsum.photos/210"
    },
    {
      id: 12,
      name: "Business",
      posterImageUrl: "https://picsum.photos/211"
    },
    {
      id: 13,
      name: "Entertainment",
      posterImageUrl: "https://picsum.photos/212"
    },
    {
      id: 14,
      name: "Chula Event",
      posterImageUrl: "https://picsum.photos/213"
    }
  ]
};
