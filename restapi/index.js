const express = require("express");
const app = express();
const path = require("path");

const port = 8080;


app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get('/',(req,res) => {
    res.send("in home");
})

app.listen(port,(req,res) =>{
    console.log("port listining on port 8080");
})