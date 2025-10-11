const foodModel = require('../models/food_model');
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

module.exports = { createFood };