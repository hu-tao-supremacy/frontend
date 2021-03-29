/* eslint-disable prettier/prettier */
module.exports = {
    ci: {
        collect: {
            numberOfRuns: 3,
            url: ["http://localhost:8080/", "http://localhost:8080/test/", "http://localhost:8080/event/", "http://localhost:8080/user-checkin/"]
        },
        upload: {
            target: "temporary-public-storage"
        }
    }
};