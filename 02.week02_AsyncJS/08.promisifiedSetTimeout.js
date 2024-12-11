function setTimeoutPromisified(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration)
    })
}

//PROMISE CHAINING - no pyramid, no individual CB approach - still cleaner, readable - stanandard
setTimeoutPromisified(1000)
    .then(() => {
        console.log('after 1s');
        return setTimeoutPromisified(3000)
    })
    .then(() => {
        console.log('after 1+3s');
        return setTimeoutPromisified(5000)
    })
    .then(() => {
        console.log('after 1+3+5s');
    })



//Async/Await - syntactic sugar on promises
async function chain() {
    await setTimeoutPromisified(1000);
    console.log('after 1s');
    await setTimeoutPromisified(3000);
    console.log('after 1+3s');
    await setTimeoutPromisified(5000);
    console.log('after 1+3+5s');
}
chain(); //returns a promise