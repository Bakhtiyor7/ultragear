console.log("web serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router.js");
const router_bssr = require("./router_bssr.js");
//Kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//2: session

//3: view
app.set("views", "views");
app.set("view engine", "ejs");

// routing codes
app.use("/resto", router_bssr);
app.use("/", router);

module.exports = app;
