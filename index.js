const fs = require("fs/promises");

const file = fs.readFile("sample.json");
const read = JSON.parse(file.toString());

const interval = (ms) =>
  new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
      console.log(read.firstName);
    }, ms);
  });

const main = async () => {
  interval(500);
  const json = await fs.readFile("sample.json");
  console.log(json);
};

main();

console.log("END");
