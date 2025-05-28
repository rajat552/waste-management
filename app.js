const express = require("express");
const app =  express();
const port = 8080 ;
const path = require("path");
const ejsMate = require("ejs-mate");
const mysql = require('mysql2');
const { v4: uuidv4 } = require('uuid');
uuidv4(); 

const methodOverride = require("method-override");
app.use(methodOverride('_method'));


var connection = mysql.createConnection({
  host     : 'localhost',      // make connection between 
  user     : 'root',            // mysql and node server
  password : '1@a68%DS,~',
  database : 'Waste_Management'
});

app.engine('ejs', ejsMate);

app.set("view engine","ejs"); 
app.set("views", path.join(__dirname, "views"));
 

app.use(express.static(path.join(__dirname,"/public")));

app.use(express.urlencoded ({extended: true}));


app.get("/main", (req, res) => {
    res.render("listings/index.ejs");
});


app.get("/dashboard", (req, res) => {
    res.render("listings/dashboard.ejs");
});

// Testing
// try {
//     connection.query("SHOW TABLES",(err, results) => {
//         if (err) throw err;
//         console.log(results);
//     });
// } catch (err) {
// console.log(err)  
//   }
 



app.get("/signup", (req, res) => {
     res.render("listings/signup.ejs");
});


app.post("/main", (req, res) => {
  console.log("working");
let{username : newUser, email: newEmail, password : newPass } = req.body;
let newId = uuidv4();
let query = 'INSERT INTO user( username, email, password, id) VALUES (?, ?, ?, ?)';
let user = [`${newUser}` , `${newEmail}`,`${newPass}`, `${newId}`];
try{
connection.query(query, user, (err , result)=>{
 if(err) throw err;
  console.log(result);
   res.redirect("/main");
} );  
} catch(err){
  console.log(err);            
}
});


app.get("/login", (req, res)=>{
  res.render("listings/login.ejs");
});

app.post("/login", (req, res) => {
  res.send("working");
});


app.get("/map", (req, res) => {
res.render("listings/map.ejs");
});




 

app.listen(port , () => {
    console.log(`listening to port ${port}`);
});