const fs = require("fs");

const content1 = fs.readFileSync("demo1.txt", "utf-8");
console.log('content1', content1)

const content2 = fs.readFileSync("demo2.txt", "utf-8");
console.log('content2', content2)
