const express = require("express");
const app = express();

//query parameter
app.get("/methods", (req,res) => {
    //http://localhost:3000/methods?a=3&b=5
    const { a, b } = req.query;
    res.json({
        add: `localhost:3000/add/${a}/${b}`,
        sub: `localhost:3000/sub/${a}/${b}`,
        mul: `localhost:3000/mul/${a}/${b}`,
        div: `localhost:3000/div/${a}/${b}`,
    })
})


//dynamic routing
app.get("/:method/:a/:b", (req, res) => {
    let { method, a, b } = req.params;
    a = Number(a);
    b = Number(b);
    let result = 0;
    switch (method) {
        case "add":
            result = a + b;
            break;
        case "sub":
            result = a - b;
            break;
        case "mul":
            result = a * b;
            break;
        case "div":
            result = a / b;
            break;
        default:
            result = 0;
    }
    res.json({ method, a, b, result })
})

app.listen(3000, () => console.log("Server is running on port 3000"))