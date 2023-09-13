// const fs = require("fs");

// const myReadableStream = fs.createReadStream(`${__dirname}/bigData.txt`);
// myReadableStream.on("data", (chunk) => {
//   console.log(chunk);
// });

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Programers");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is About Page");
    res.end();
  } else {
    res.write("Not Found");
    res.end();
  }
});

server.listen(3000);
console.log("listeing port on 3000");
