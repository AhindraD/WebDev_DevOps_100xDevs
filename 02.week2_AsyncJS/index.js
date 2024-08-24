class PromiseCustom {
    constructor(fn) {
        this.resolve = fn
    }

    then(cbFn) {
        return cbFn(this.resolve)
    }
}


const fs = require('fs');
function readFn(resolve) {
    fs.readFile('demo1.txt', 'utf8', (err, data) => {
        if (err) throw err
        resolve(data)
    })
}
const p = new Promise(readFn);
function cb(data) {
    fs.writeFile('custom.txt', data, (err) => {
        if (err) throw err
    })
    console.log(data);
}
p.then(cb)