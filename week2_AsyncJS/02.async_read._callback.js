const fs = require("fs");

function printData(err, data) {
    //error first fn  ----> error handling first, then execution
    console.log(data);
}

//function arguments
fs.readFile("demo1.txt", "utf8", printData)
fs.readFile("demo2.txt", "utf8", printData)

console.log("end of program")