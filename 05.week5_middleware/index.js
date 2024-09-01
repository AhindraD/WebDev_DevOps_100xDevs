const express = require("express")
const app = express()


let visitCount = 0;
const middleware_sumFn = (req, res, next) => {
    console.log("middleware called");
    console.log(`Total visits: ${++visitCount}`);
    res.count = visitCount;
    if (visitCount < 10) {
        next();
    } else {
        res.end(
            `Visit count exceeded. Visit count: ${visitCount}`
        );
    }
}

const realSumFn = ((req, res) => {
    //localhost:3000/sum?a=3&b=5
    let { a, b } = req.query;
    res.json({
        a,
        b,
        result: a + b,
        count: res.count
    })
})

app.get("/sum", middleware_sumFn, realSumFn)

app.listen(3000, () => console.log("server started at port 3000"))