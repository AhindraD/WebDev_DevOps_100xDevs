setTimeout(() => {
    console.log('after 1s');
    setTimeout(() => {
        console.log('after 1+3s');
        setTimeout(() => {
            console.log('after 1+3+5s');

        }, 5000)
    }, 3000)
}, 1000)



//CLEANER CALLBACK --- NO PYRAMID OF DOOM
setTimeout(callback1, 1000)
function callback1() {
    console.log('after 1s');
    setTimeout(callback3, 3000)
}
function callback3() {
    console.log('after 1+3s');
    setTimeout(callback5, 5000)
}
function callback5() {
    console.log('after 1+3+5s');
}