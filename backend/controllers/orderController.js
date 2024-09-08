const {orderModel} = require("../models/orderModel");
const {userModel} = require("../models/userModel");
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


// placing user order for frontend
const placeOrder = async(req,res) => {
  const frontend_url = "http://localhost:5173"
  
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    })
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, {cartData: {}});

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100 * 80,
      },
      quantity: item.quantity,
    }))

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charge",
        },
        unit_amount: 2*100*80,
      },
      quantity: 1

    })

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    })

    res.json({success: true,session_url: session.url});

  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error in placing order"})
  }
}

const verifyOrder = async(req,res) => {
  const {success, orderId} = req.body;
  try {
    if(success === true){
      const order = await orderModel.findByIdAndUpdate(orderId, {payment: true});
      res.json({success: true, message: "Paid"});
    }
    else{
      await orderModel.findByIdAndDelete(orderId);
      res.json({success: false, message: "Payment failed"});
    }
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error in verifying order"})
  }
}

// user orders for frontend
const userOrders = async(req,res) => {
  try {
    const orders = await orderModel.find({userId: req.body.userId, payment: true});
    res.json({success: true, orders});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error in fetching orders"})
  }
}

// listing orders for admin panel

const listOrders = async(req,res) => {
  try {
    const order = await orderModel.find();
    res.json({success: true, order});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error in fetching orders"})
  }
}

//api for updating order status
const updateStatus = async(req,res) => {
  try {
    const order = await orderModel.findByIdAndUpdate(req.body.orderId, {status: req.body.status});
    res.json({success: true, message: "Status updated"});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error in updating order status"})
  }
}


module.exports = {placeOrder,verifyOrder, userOrders, listOrders, updateStatus}