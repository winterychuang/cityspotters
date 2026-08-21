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
    res.render("recommendations");
})

app.get("/recommendations/results", (req, res) =>{
    res.send("rec page 2");


//shelf for now until we figure out specific routing 
//for unique pages (since there will be multiple)
//app.get("/information/:place", (req, res) =>{
//    res.render("info");
//})

app.get("/settings", (req, res) =>{
    res.render("settings");
})

app.get("/profile", (req, res) =>{
    res.render("profile");
})

app.listen(PORT, () => 
console.log("Server is running on port", PORT))})