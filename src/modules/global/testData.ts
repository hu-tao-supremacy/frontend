const testData = {
  eventDetail: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero pellentesque, hendrerit eros vitae, malesuada nisi. Nam tempus dolor vitae mauris luctus aliquet. Sed et finibus erat. Fusce sit amet nisi laoreet purus suscipit luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent non gravida lectus, congue euismod sem. Proin vel leo quam. Integer vitae elit elit. Morbi non elit suscipit, posuere est et, hendrerit nulla. Cras ipsum massa, luctus et tellus ac, placerat pretium augue. Nunc eget tempor eros. Cras ac massa eu justo consectetur facilisis vitae eget eros. Mauris sed ultrices sem, nec commodo libero. Quisque gravida non ipsum vel egestas. Duis ultricies ullamcorper lacus vitae auctor.

    Vivamus pretium ac mi quis hendrerit. Pellentesque quis enim lectus. Sed facilisis et felis vitae porta. Suspendisse egestas, eros vel scelerisque dictum, nibh est venenatis erat, at egestas dolor ipsum vel diam. Praesent in vestibulum mauris. Cras porta tincidunt ante, vel euismod urna blandit feugiat. Phasellus auctor sollicitudin leo, et dictum libero rutrum a. Nulla est neque, malesuada quis mattis vel, commodo sit amet justo. Donec a sapien elit. Curabitur et lacinia diam. Ut gravida faucibus magna. Ut ac odio diam.`,
  eventOrganizer: {
    imgUrl: "https://picsum.photos/100",
    imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    shortName: "SGCU",
    fullName: "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)",
    detail: `<ORG - BIO>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque pulvinar ornare orci amet. Quis arcu rhoncus velit amet nulla eleifend tristique quis? `
  },
  eventBanner: {
    bannerImg: "https://picsum.photos/1000",
    bannerImgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    profileImg: "https://picsum.photos/500",
    profileImgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    title: "Information and Communication Event (ICE)",
    tags: ["Engineering", "Food", "Education"],
    date: "Sun, 14 Feb - 16 April",
    time: "10:00 -18:00",
    location: "Engineering Faculty, Chula"
  },
  eventsSchedule: [
    {
      id: 1,
      faculty: "TGR Faculty, Chula",
      day: 14,
      month: "Feb",
      time: "10:00-18:00"
    },
    {
      id: 2,
      faculty: "Engineering Faculty, Chula",
      day: 16,
      month: "Apr",
      time: "10:00-18:00"
    },
    {
      id: 3,
      faculty: "Engineering Faculty, Chula",
      day: 16,
      month: "Apr",
      time: "10:00-18:00"
    },
    {
      id: 4,
      faculty: "TGR Faculty, Chula",
      day: 14,
      month: "Feb",
      time: "10:00-18:00"
    },
    {
      id: 5,
      faculty: "Engineering Faculty, Chula",
      day: 16,
      month: "Apr",
      time: "10:00-18:00"
    },
    {
      id: 6,
      faculty: "Engineering Faculty, Chula",
      day: 16,
      month: "Apr",
      time: "10:00-18:00"
    },
    {
      id: 7,
      faculty: "TGR Faculty, Chula",
      day: 14,
      month: "Feb",
      time: "10:00-18:00"
    },
    {
      id: 8,
      faculty: "Engineering Faculty, Chula",
      day: 16,
      month: "Apr",
      time: "10:00-18:00"
    },
    {
      id: 9,
      faculty: "Engineering Faculty, Chula",
      day: 16,
      month: "Apr",
      time: "10:00-18:00"
    },
    {
      id: 10,
      faculty: "TGR Faculty, Chula",
      day: 14,
      month: "Feb",
      time: "10:00-18:00"
    },
    {
      id: 11,
      faculty: "Engineering Faculty, Chula",
      day: 16,
      month: "Apr",
      time: "10:00-18:00"
    },
    {
      id: 12,
      faculty: "Engineering Faculty, Chula",
      day: 16,
      month: "Apr",
      time: "10:00-18:00"
    }
  ],
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

export default testData;
