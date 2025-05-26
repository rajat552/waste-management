const express = require("express");
const app =  express();
const port = 8080 ;
const path = require("path");
const ejsMate = require("ejs-mate");

app.engine('ejs', ejsMate);

app.set("view engine","ejs"); 
app.set("views", path.join(__dirname, "views"));
 

app.use(express.static(path.join(__dirname,"/public")));

app.use(express.urlencoded ({extended: true}));


app.get("/", (req, res) => {
    res.render("listings/index.ejs");
});



app.listen(port , () => {
    console.log(`listening to port ${port}`);
});