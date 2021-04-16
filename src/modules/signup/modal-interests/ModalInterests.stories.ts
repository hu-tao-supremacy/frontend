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
      img: "https://picsum.photos/200",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 2,
      name: "Online Event",
      img: "https://picsum.photos/201",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 3,
      name: "Stories",
      img: "https://picsum.photos/202",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 4,
      name: "Education",
      img: "https://picsum.photos/203",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 5,
      name: "IT & Technology",
      img: "https://picsum.photos/204",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 6,
      name: "Internship",
      img: "https://picsum.photos/205",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 7,
      name: "Investment",
      img: "https://picsum.photos/206",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 8,
      name: "Art & Design",
      img: "https://picsum.photos/207",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 9,
      name: "Sport",
      img: "https://picsum.photos/208",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 10,
      name: "Seft-growth",
      img: "https://picsum.photos/209",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 11,
      name: "Gaming",
      img: "https://picsum.photos/210",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 12,
      name: "Business",
      img: "https://picsum.photos/211",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 13,
      name: "Entertainment",
      img: "https://picsum.photos/212",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    },
    {
      id: 14,
      name: "Chula Event",
      img: "https://picsum.photos/213",
      imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj"
    }
  ]
};
