export const testData = {
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
    description: `<ORG - BIO>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque pulvinar ornare orci amet. Quis arcu rhoncus velit amet nulla eleifend tristique quis? `
  },
  ticketID: "175FD57",
  profile: {
    firstName: "Elon",
    lastName: "Musk",
    img: "https://picsum.photos/200",
    imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
    email: "613XXXX21@student.chula.ac.th",
    like: 16,
    ticket: 24,
    following: 48
  }
};

const ticket = {
  event: testData.event,
  organization: testData.organization,
  ticketID: testData.ticketID
};

export const walletData = {
  ticket: ticket,
  ongoingTickets: [ticket, ticket, ticket],
  historyTickets: [ticket, ticket]
};

export default testData;
