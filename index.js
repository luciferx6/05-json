const fs = require("fs/promises");

const interval = (ms) =>
  new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
      console.log();
    }, ms);
  });

const main = async () => {
  interval(500);
  const json = await fs.readFile("sample.json");
  console.log(json);
};

main();

console.log("END");
