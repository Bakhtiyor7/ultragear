const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    res.send("Home sahifasidasiz");
});

router.get("/menu", (req, res) => {
    res.send("Menu safifasidasiz");
});

router.get("/community", (req, res) => {
    res.send("Community sahifasidasiz");
});

module.exports = router;