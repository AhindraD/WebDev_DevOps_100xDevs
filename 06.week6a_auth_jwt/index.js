const express = require("express")
const { v4: uuidv4 } = require('uuid');

const app = express()
app.use(express.json())

const USER_DB = [
    {
        "username": "Jacky.Marks",
        "password": "y7k8MJSh0fd9Hyk"
    }
];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    let currUser = {
        "username": username,
        "password": password
    }
    console.log('currUser', currUser)
    USER_DB.push(currUser);

    res.json({ status: "200", data: currUser })
})

app.post("/signin", (req, res) => {
    const { username, password } = req.body;
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
        res.json({ status: "200", token: token })
    }
    else {
        res.json({ status: "400", messsage: "Invalid credentials" })
    }
})


const PORT = 3000 || process.env.PORT
app.listen(PORT, () => {
    console.log(`sever running at : http://localhost:${PORT}`)
})