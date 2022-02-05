const fs = require("fs");

console.log("Writing on posts.json");

const fileNames = fs.readdirSync("public/data/posts");
let posts = [];

fileNames.map(async (fileName) => {
  if (!fileName.endsWith(".json")) {
    return false;
  }

  const fileContents = fs.readFileSync(`public/data/posts/${fileName}`, "utf8");

  posts.push(JSON.parse(fileContents));
});

fs.writeFileSync("public/data/posts.json", JSON.stringify(posts, null, 2));
