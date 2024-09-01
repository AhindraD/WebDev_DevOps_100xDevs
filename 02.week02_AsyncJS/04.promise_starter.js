function random(resolve, reject) {
    setTimeout(resolve, 3000);
}

const p = new Promise(random);// will eventually resolve. returns value

function callBack() {
    console.log('callBack after resolve');
}

p.then(callBack)//after resolve calls this, uses the eventually returned value