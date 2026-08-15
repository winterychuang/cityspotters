const express = require("express");
const app = express();
const PORT = 3000;


app.set("view engine", "ejs")

app.get("/", (req,res) => {
    res.send("title page"); //tester
})

app.get("/map", (req, res) => {
    res.send("map page")
})

app.get("/recommendations", (req, res)=> {
    res.send("rec page 1")
})

//app.get("/recommendations/results", (req, res)=>{
   // res.send("rec page 2 wip for now")
//})

app.get("/settings", (req, res)=>{
    res.send("settings page")
})

app.get("/info/:place", (req, res)=>{
    res.send("generic info page")
})

app.get("/profile", (req, res) => {
    res.send("profile page")
})

app.listen(PORT, () => 
console.log("Server is running on port", PORT))