const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(`${process.env.MONGODB_URI}food-del`)
  .then(() => console.log("MongoDB connected"))
}

module.exports = {connectDB}