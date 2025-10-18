const foodModel = require('../models/food_model');
const likeModel = require('../models/likes');
const saveModel = require('../models/save');
const storageService = require('../services/storage');
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "File is required" });
        }
        if (!req.body.name || !req.body.description) {
            return res.status(400).json({ message: "Name and description are required" });
        }

        const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());

        const foodItem = await foodModel.create({
            name: req.body.name,
            description: req.body.description,
            video: fileUploadResult.url,
            foodPartner: req.foodPartner._id
        });

        res.status(201).json({
            message: "food created successfully",
            food: foodItem
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating food", error: error.message });
    }
}

async function getFoodItem(req, res) {
   const foodItems = await foodModel.find({})
   res.status(200).json({
    message: "food items fetched successfully",
       foodItems
   });
}

async function likeFood(req, res) {
    const { foodId } = req.body;
    const user = req.user;

    const isAlreadyLiked = await likeModel.findOne({
        user: user._id,
        food: foodId
    })

    if (isAlreadyLiked) {
        await likeModel.deleteOne({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { likeCount: -1 }
        })

        return res.status(200).json({
            message: "Food unliked successfully"
        })
    }

    const like = await likeModel.create({
        user: user._id,
        food: foodId
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc: { likeCount: 1 }
    })

    res.status(201).json({
        message: "Food liked successfully",
        like
    })
}


async function saveFood(req, res) {

    const { foodId } = req.body;
    const user = req.user;

    const isAlreadySaved = await saveModel.findOne({
        user: user._id,
        food: foodId
    })

    if (isAlreadySaved) {
        await saveModel.deleteOne({
            user: user._id,
            food: foodId
        })

        await foodModel.findByIdAndUpdate(foodId, {
            $inc: { savesCount: -1 }
        })

        return res.status(200).json({
            message: "Food unsaved successfully"
        })
    }

    const save = await saveModel.create({
        user: user._id,
        food: foodId
    })

    await foodModel.findByIdAndUpdate(foodId, {
        $inc: { savesCount: 1 }
    })

    res.status(201).json({
        message: "Food saved successfully",
        save
    })

}


module.exports = { createFood, getFoodItem , likeFood , saveFood};