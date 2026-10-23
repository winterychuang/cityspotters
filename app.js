const express = require("express");
const app = express();
const PORT = 3000;

const infosrc = require("./views/components/data.js")
const usersrc = require("./views/components/user_data.js")
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true }));

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

app.post("/recommendations/result", (req, res) =>{
    const num_save = parseInt(req.body.uservalue_input)
    let locationstr = Object.keys(infosrc.locations);
    res.render("recommendation_result",{
        data: infosrc.locations, 
        lockeys:locationstr, 
        usednums: [],
        usernum: num_save
    });
})
//app.get("/recommendations/results", (req, res) =>{
//    res.send("rec page 2");
//})

app.get("/information/:place", (req, res) =>{
    let legbiz = "Legacy Business";
    let hun = "In a Historically Underserved Neighborhood";
    let women_owned = "Women-owned";
    let pubtrans = "Close to Public Transit";
    let free = "Free for All"
    res.render("information", {
        data: infosrc.locations[req.params.place],
        legbiz: legbiz,
        hun: hun,
        pubtrans: pubtrans,
        women_owned: women_owned,
        free: free
    });
})

app.get("/settings", (req, res) =>{
    res.render("settings");
})

app.get("/information", (req, res) => {
    res.render("info")
})

app.get("/profile", (req, res) =>{
    res.render("profile", {
        user: usersrc.users
    });
})


app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    console.log(Object.keys(infosrc.locations).length)
}
)
