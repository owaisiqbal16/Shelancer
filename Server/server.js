const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin : 'http://localhost:8101',
    optionsSuccessStatus : 200
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors(corsOptions))

app.listen(3000, ()=> {
    console.log("server started");
})