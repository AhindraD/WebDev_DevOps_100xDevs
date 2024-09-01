const express = require("express")
const app = express()


let visitCount = 0;
const middleware_sumFn = (req, res, next) => {
    console.log("middleware1 called...");
    console.log(`Total visits: ${++visitCount}`);
    console.log({
        "method": req.method,
        "host": req.hostname,
        "url": req.url,
        "timestamp": new Date().toLocaleString()
    })
    res.count = visitCount;
    if (visitCount < 10) {
        next();
    } else {
        res.end(
            `Visit count exceeded. Visit count: ${visitCount}`
        );
    }
}

const logging_middleware = (req, res, next) => {
    console.log("middleware2 called...");
    next();
}

const realSumFn = ((req, res) => {
    //localhost:3000/sum?a=3&b=5
    let { a, b } = req.query;
    a = Number(a);
    b = Number(b);
    res.json({
        a,
        b,
        result: a + b,
        count: res.count
    })
})

app.get("/sum", middleware_sumFn, logging_middleware, realSumFn)

app.listen(3000, () => console.log("server started at port 3000"))