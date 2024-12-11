const fs = require('fs');

//CALLBACK
// fs.readFile("demo2.txt", "utf-8", readInCb);
function readInCb(err, data) {
    if (err) {
        console.log('Error: ', err);
    }
    else {
        console.log('Done: ', data);
    }
}




//PROMISES
function readFilePromisified(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, "utf-8", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

function onDone(data) {
    console.log('Done: ', data);
}

function onError(err) {
    console.log("Error: " + err);
}

// readFilePromisified("demo1.txt").then(onDone).catch(onError)


//CAN easily be chained --- BENEFIT
readFilePromisified("demo1.txt")
    .then((data1) => {
        console.log('Done1: ', data1);
        return readFilePromisified("demo2.txt")
    })
    .then((data2) => {
        console.log('Done2: ', data2);
    })
    .catch(onError)




//ASYNC/AWAIT - syntactic sugar --- promise chain
async function main() {
    console.log('async / await');

    try {
        const data1 = await readFilePromisified("demo1.txt");
        console.log('Done1: ', data1);

        const data2 = await readFilePromisified("demo20.txt");//will error
        console.log('Done2: ', data2);

    } catch (error) {
        onError(error)
    }
}
main()