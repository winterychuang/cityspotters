const express = require("express");
const app = express();
const PORT = 3000;


app.set("view engine", "ejs")

app.get("/", (req,res) => {
    res.render("homepg");
})

app.get("/map", (req, res) =>{
    res.render("map");
})

app.get("/recommendations", (req, res) =>{
    res.send("rec page 1");
})

//app.get("/recommendations/results", (req, res) =>{
//    res.send("rec page 2");
//})

app.get("/information/:place", (req, res) =>{
    res.send("info page");
})

app.get("/settings", (req, res) =>{
    res.send("settings page");
})

app.get("/profile", (req, res) =>{
    res.send("prof page");
})

app.listen(PORT, () => 
console.log("Server is running on port", PORT))