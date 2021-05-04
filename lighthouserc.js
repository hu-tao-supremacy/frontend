/* eslint-disable prettier/prettier */
module.exports = {
  ci: {
    collect: {
      settings: {
        chromeFlags: "--ignore-certificate-errors"
      },
      numberOfRuns: 3,
      url: [
        "https://127.0.0.1:8000/",
        "https://127.0.0.1:8000/event/",
        "https://127.0.0.1:8000/user-checkin/",
        "https://127.0.0.1:8000/user-profile",
        "https://127.0.0.1:8000/org/team",
        "https://127.0.0.1:8000/event/11",
        "https://127.0.0.1:8000/org/team/create-org",
        "https://127.0.0.1:8000/org-info/1",
        "https://127.0.0.1:8000/org/event",
        "https://127.0.0.1:8000/org/event/attendee-management/1530",
        "https://127.0.0.1:8000/org/event/dashboard/1530",
        "https://127.0.0.1:8000/org/team/create-event"
      ]
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://lit-ocean-90649.herokuapp.com/",
      token: process.env.LHCI_SERVER_TOKEN
    }
  }
};
