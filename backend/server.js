const express = require("express")
const cors = require("cors");
const { connectDB } = require("./config/db");
const { foodRouter } = require("./routes/foodRoute");
const { userRouter } = require("./routes/userRoute");
const dotenv = require("dotenv/config.js");
const cartRouter = require("./routes/cartRoute");
const { orderRouter } = require("./routes/orderRoute");


// app config
const app = express()
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());


//DB connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working")
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`)
})

// ?