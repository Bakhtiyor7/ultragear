const express = require("express");
const router_bssr = express.Router();
const restaurantController = require("./controllers/restaurantController");

/********************************
 *            BSSR EJS          *
 * ******************************
 */

// memberga dahldor routerlar
router_bssr.get("/signup", restaurantController.getSignupMyRestaurant);
router_bssr.post("/signup", restaurantController.signupProcess);

router_bssr.get("/login", restaurantController.getLoginMyRestaurant);
router_bssr.post("/login", restaurantController.loginProcess);

router_bssr.get("/logout", restaurantController.logout);

// boshqa routerlar
router_bssr.get("/menu", (req, res) => {
  res.send("Menu safifasidasiz");
});

router_bssr.get("/community", (req, res) => {
  res.send("Community sahifasidasiz");
});

module.exports = router_bssr;
