const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.post("/sum", (req, res) => {
    console.log(req.body);
    const a = Number(req.body.data.a);
    const b = Number(req.body.data.b);
    console.log({ a, b });

    res.json({
        a,
        b,
        result: a + b
    })
})

app.listen(3000, () => console.log("server started at port 3000"))