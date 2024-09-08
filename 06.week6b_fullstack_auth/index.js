const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
const JWT_SECRET = "my_secret_key";

const USER_DB = [
    {
        "username": "Jacky.Marks",
        "password": "y7k8MJSh0fd9Hyk"
    }
];

const logger = (req, res, next) => {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
}


app.get("/", (req, logger, res) => {
    res.sendFile(__dirname + "./public/index.html")
})


app.post("/signup", logger, (req, res) => {
    const { username, password } = req.body;
    let currUser = {
        "username": username,
        "password": password
    }
    USER_DB.push(currUser);
    res.json({ status: "200", data: currUser })
})

app.post("/signin", logger, (req, res) => {
    const { username, password } = req.body;
    let foundUser = USER_DB.find((user) => {
        if (user.username === username && user.password === password) {
            return true
        } else {
            return false;
        }
    })
    if (!foundUser) { res.json({ status: 400, message: "invalid credentials" }) }

    const token = jwt.sign({ username }, JWT_SECRET, { algorithm: "HS256", expiresIn: "30s" })
    res.json({ status: "200", token: token })
})


const auth_middleware = (req, res, next) => {
    try {
        const token = req.headers.token;
        const decodedData = jwt.verify(token, JWT_SECRET);
        // const decodedData_unsafe = jwt.decode(token);
        const decodedUsername = decodedData.username;
        req.username = decodedUsername;
        console.log("authorized!")
        next();
    } catch (err) {
        res.end({ status: "400", message: "unauthorized request" })
    }
}

app.get("/protected", logger, auth_middleware, (req, res) => {
    const decodedUsername = req.username;
    let foundUser = USER_DB.find((user) => {
        if (user.username === decodedUsername) {
            return true
        } else {
            return false;
        }
    })
    res.json({ status: "200", data: foundUser })
})


const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`server running at : http://localhost:${PORT}`)
})