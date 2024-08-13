/*
Write a function that
Reads the contents of a file
Trims the extra space from the left and right
Writes it back to the file
*/
const fs = require('fs');
const read_path = "./trim.txt";
const write_path = "./trimmed.txt";

//Main Function, that's wrapped in a promise
function readOps(resolve) {
    fs.readFile(read_path, 'utf-8', (err, data) => {
        if (err) throw err
        resolve(data)
    })
}

const trim_promise = new Promise(readOps);

//callback that gets the data from the promise resolve in Main Function
function writeOps(data) {
    const trimmed_data = data.trim();
    fs.writeFile(write_path, trimmed_data, (err) => {
        if (err) throw err
        console.log('File written successfully')
    })
}

trim_promise.then(writeOps);