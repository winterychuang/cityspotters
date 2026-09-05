const express = require("express");
const app = express();
const PORT = 3000;


app.use(express.static(__dirname + "/public"));


app.set("view engine", "ejs")

const infosrc = require("./views/components/data.js")

app.get("/", (req,res) => {
    res.render("homepage");
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
    res.render("information", {data: infosrc.locations[req.params.place]});
})

app.get("/settings", (req, res) =>{
    res.send("settings page");
})

app.get("/profile", (req, res) =>{
    res.render("profile");
})


app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
    console.log(infosrc)
}
)
