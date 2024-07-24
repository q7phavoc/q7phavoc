const url = require("url");

const { URL } = url;
const myURL = new URL(
  "https://github.com/JungYeolYang/Full-Stack-React-TypeScript-and-Node-acorn"
);

console.log(myURL);
console.log(url.format(myURL));
