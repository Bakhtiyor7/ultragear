console.log("web serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router.js");


//Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//2: session

//3: view
app.set("views", "views");
app.set("view engine", "ejs"); 

// routing codes
app.use("/", router) 


module.exports = app;