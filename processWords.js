const fs = require("fs");

const processWords = (filePath) => {
  const file = fs.readFileSync(filePath, "utf-8");
  const json = JSON.parse(file);

  const word = json[Math.floor(Math.random() * json.length)];

  fs.writeFileSync("./word.json", JSON.stringify([word]));
  return console.log("done");
};

processWords("./words/words.json");
