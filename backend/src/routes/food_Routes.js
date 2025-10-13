const express = require('express');
const foodController = require("../controllers/food_Controller");
const { FoodPartnerMiddleware,authUserMiddleware } = require("../middlewares/auth");
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
router.get('/getfooditems', authUserMiddleware, foodController.getFoodItem);

module.exports = router;
