const express = require("express");
const { registerUser, loginUser, logoutUser, registerFoodPartner, loginFoodPartner, logoutFoodPartner } = require("../controllers/auth_Controller");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);


router.post("/registerFoodPartner", registerFoodPartner);
router.post("/loginFoodPartner", loginFoodPartner);
router.get("/logoutFoodPartner", logoutFoodPartner);


module.exports = router;
