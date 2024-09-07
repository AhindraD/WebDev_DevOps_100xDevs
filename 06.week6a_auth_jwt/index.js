const express = require("express")

const app = express()
app.use(express.json())

const USER_DB = [];

app.post("signup", (req, res) => {
    const [username, password] = req.body;
    let currUser = {
        username,
        password
    }

    USER_DB.push(currUser);

    res.json({ status: "200", data: currUser })
})

app.post("/signin", (req, res) => {
    const [username, password] = req.body;
    if (!username || !password) { res.json({ status: "400" }) }

    const foundUser = USER_DB.find((elem, indx) => {
        if (elem.username === username && elem.password === password) {
            return true
        } else {
            return false
        }
    })

    if (foundUser) {
        console.log("user found")
        const token = uuidv4();
        res.json({ status: "200", data: token })
    }
    else {
        res.json({ status: "400", messsage: "Invalid credentials" })
    }
})


const PORT = 3000 || process.env.PORT
app.listen(PORT, () => {
    console.log(`sever running at : http://localhost:${PORT}`)
})