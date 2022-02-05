const fs = require("fs");

console.log("Writing on events.json");

const fileNames = fs.readdirSync("public/data/events");
let events = [];

fileNames.map(async (fileName) => {
    if (!fileName.endsWith(".json")) {
        return false;
    }

    const fileContents = fs.readFileSync(
        `public/data/events/${fileName}`,
        "utf8"
    );

    events.push(JSON.parse(fileContents));
});

fs.writeFileSync("public/data/events.json", JSON.stringify(events, null, 2));
