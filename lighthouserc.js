/* eslint-disable prettier/prettier */
module.exports = {
    ci: {
        collect: {
            settings: {
                chromeFlags: "--ignore-certificate-errors"
            },
            numberOfRuns: 3,
            url: ["https://localhost:8080/", "https://localhost:8080/test/", "https://localhost:8080/event/", "https://localhost:8080/user-checkin/"]
        },
        upload: {
            target: "temporary-public-storage"
        }
    }
};