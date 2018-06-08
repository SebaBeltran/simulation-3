require("dotenv").config()
const express = require("express"),
      bodyParser = require("body-parser"),
      massive = require("massive"),
      controller = require("./controller");

const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()
app.use(bodyParser.json())

const port = SERVER_PORT;
massive(CONNECTION_STRING).then(db => app.set("db", db))

app.post("/api/login", controller.login)
app.post("/api/register", controller.register);

app.post("/api/addpost", controller.addPost);

app.get("/api/posts", controller.getPosts)

app.listen(port, console.log(`Listening to port: ${port}`))