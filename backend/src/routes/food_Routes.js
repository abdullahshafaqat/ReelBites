const express = require('express');
const foodController = require("../controllers/food_Controller");
const { FoodPartnerMiddleware } = require("../middlewares/auth");
const router = express.Router();
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage(),
});

/* POST /api/food/create [protected] */
router.post(
    '/create',
    FoodPartnerMiddleware,
    upload.single("file"), // field name should match what your controller expects
    foodController.createFood
);

module.exports = router;