const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("Server started at port 3000");
});

app.get("/", (req,res) => {
    res.send("hiii");
})

app.post("/api/cars", (req,res) => {
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car submitted");
})

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/myDatabase')
    .then(() => {
        console.log("Connection Successful");
    })
    .catch((error) => {
        console.log("ERRORS", error);
    });
