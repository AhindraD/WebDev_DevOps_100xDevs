/*
Assigment - WEEK_02_ASYNC_JS
Create Promisified Version of the below function
01.setTimeout
02.fetch
03.fs.readFile
*/


//01.SETTIMEOUT PROMISIFIED VERSION
function setTimeOut_Promisified(delay, value) {
    return new Promise((resolve, reject) => {
        let timeOutID = setTimeout(() => {
            resolve(value);
            clearTimeout(timeOutID);//cleanup
        }, delay);
    })
}
(async () => {
    const result = await setTimeOut_Promisified(2000, 'Hello from promisified SetTimeOut')
    console.log(result)
})()




//02.FETCH PROMISIFIED VERSION
function fetch_Promisified(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {throw Error(response.statusText)}
                return response.json()
            })
            .then((data)=>resolve(data))
            .catch((error)=>reject(error))  
            .finally(()=>console.log('fullfilled'))
    })
}

(async()=>{
    const result = await fetch_Promisified(`https://jsonplaceholder.typicode.com/posts/13`)
    console.log(result)
})()




//03.fs.readFile PROMISIFIED VERSION
const fs = require('fs');
function readFile_Promisified(file_path,encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(file_path,encoding, (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}

(async()=>{
    const result = await readFile_Promisified('./demo1.txt', 'utf-8');
    console.log(result)
})()