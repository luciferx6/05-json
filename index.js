const fs = require("fs/promises");

// const timeout = (ms) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       console.log("TIMER");
//     }, ms);
//   });

const main = async () => {
  const fileBuffer = await fs.readFile("sample.json");
  const obj = console.log(JSON.parse(fileBuffer.toString()));
  console.log(obj.phoneNumbers[0].number);
};

main();

console.log("END");
