const fs = require("fs/promises");

setInterval(async () => {
  const file = await fs.readFile("sample.json");
  const obj = JSON.parse(file.toString());
  console.log(obj.phoneNumbers.length);
  console.log(obj.firstName, obj.lastName);
  console.log(obj.address.streetAddress, obj.address.city, obj.address.state);
}, 1000);

// const file = fs.readFile("sample.json");
// const read = JSON.parse(file.toString());

// const interval = (ms) =>
//   new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve();
//       console.log(read.firstName);
//     }, ms);
//   });

// const main = async () => {
// setInterval
// };

// main();

console.log("END");
