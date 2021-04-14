const event = {
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
  tags: ["Engineering", "Food", "Education"]
};

const organization = {
  img: "https://picsum.photos/100",
  imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
  shortName: "SGCU",
  fullName: "องค์การบริหารสโมสรนิสิตจุฬาลงกรณ์มหาวิทยาลัย (อบจ.)",
  description: `<ORG - BIO>   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque pulvinar ornare orci amet. Quis arcu rhoncus velit amet nulla eleifend tristique quis? `
};

const ticketID = "175FD57";

const profile = {
  firstName: "Elon",
  lastName: "Musk",
  img: "https://picsum.photos/200",
  imgHash: "LEHV6nWB2yk8pyo0adR*.7kCMdnj",
  email: "613XXXX21@student.chula.ac.th",
  like: 16,
  ticket: 24,
  following: 48
};

const ticket = {
  event: event,
  organization: organization,
  ticketID: ticketID
};

export default {
  profile: profile,
  ongoingTickets: [ticket, ticket, ticket],
  historyTickets: [ticket, ticket],
  pendingTickets: [ticket, ticket, ticket, ticket]
};
