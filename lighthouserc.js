/* eslint-disable prettier/prettier */
module.exports = {
    ci: {
        collect: {
            settings: {
                chromeFlags: "--ignore-certificate-errors"
            },
            numberOfRuns: 3,
            url: ["https://127.0.0.1:8000/", "https://127.0.0.1:8000/test/", "https://127.0.0.1:8000/event/", "https://127.0.0.1:8000/user-checkin/"]
        },
        upload: {
            target: 'lhci',
            serverBaseUrl: 'https://lit-ocean-90649.herokuapp.com/',
            token: process.env.LHCI_SERVER_TOKEN,
        }
    }
};
