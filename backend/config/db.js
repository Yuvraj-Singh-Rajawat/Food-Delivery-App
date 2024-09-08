const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://TomatoApp:ThisIsAmazing@tomatoapp.d9n9d.mongodb.net/food-del")
  .then(() => console.log("MongoDB connected"))
}

module.exports = {connectDB}