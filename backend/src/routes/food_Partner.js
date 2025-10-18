const express = require('express');
const foodPartnerController = require("../controllers/food_partnerController");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();


/* /api/food-partner/:id */
router.get("/:id",
    authMiddleware.authUserMiddleware,
    foodPartnerController.getFoodPartnerById)

module.exports = router;