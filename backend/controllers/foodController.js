const {foodModel} = require("../models/foodModel");
const fs = require("fs");

// add food item

const addFood = async(req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category
  })

  try {
    await food.save();
    res.json({success: true, message: "Food Added"})
  } catch (error) {
    console.log(error)
    res.json({success: false, message: "Error adding food"})
  }
}


// all food list
const listFood = async(req, res) => {
  try {
    const foodDishes = await foodModel.find();
    res.json({success: true, data: foodDishes});
  } catch (error) {
    res.json({success: false, message: "Error getting list"})
  }
}

// remove food item
const removeFood = async(req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlinkSync(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);

    res.json({success: true, message: "Food removed", data: food});
  } catch (error) {
    console.log(error);
    
    res.json({success: false, message: "Error removing food"})
  }
}

module.exports = {addFood, listFood, removeFood}