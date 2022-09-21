console.log("web serverni boshlash");
const express = require("express");
const app = express();
const res = require("express/lib/response");

//mongodb chaqirish
const mongodb = require("mongodb");
const db = require("./server").db();

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


module.exports = app;