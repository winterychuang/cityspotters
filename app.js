const express = require("express");
const app = express();
const PORT = 3000;

const infosrc = require("./views/components/data.js")
app.use(express.static(__dirname + "/public"));


app.set("view engine", "ejs")

//const commentsrc = require(".views/components/comments.js");

app.get("/", (req,res) => {
    res.render("homepage");
})

app.get("/map", (req, res) =>{
    let locationstr = Object.keys(infosrc.locations);
    res.render("map", {
        data: infosrc.locations, 
        lockeys:locationstr, 
        usednums: []
    });
})

app.get("/recommendations", (req, res) =>{
    // find 4 random non repeating places
    let locationstr = Object.keys(infosrc.locations);
    res.render("recommendations",{
        data: infosrc.locations, 
        lockeys:locationstr, 
        usednums: []
    });
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
}
)
