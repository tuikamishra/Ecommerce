var express=require('express');
var app=express();
const cors = require('cors');
const bodyParser=require('body-parser');
var config=require("./Db");
const mongoose=require('mongoose');
const PORT=9999;
const productCatgRoute=require("./product/productcatg.route");
 const cityRoute=require("./statecity/city.route");
 const stateRoute=require("./statecity/state.route");
 const productRoute=require("./product/product.route");
 const vendorRoute=require("./vendor/vendor.route");
 const customerRoute=require("./customer/cutomer.route")
const billRoute = require('./admin/bills/bill.route.js');
const paymentdetailsRoute = require('./admin/bills/paymentdetails.route.js');
const payment=require('./payment.js');
 //10 line skip
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/productcatg",productCatgRoute);
app.use("/state",stateRoute);
app.use("/city",cityRoute);
app.use("/product",productRoute);
app.use("/vendor",vendorRoute);
app.use("/bill",billRoute);
app.use("/paymentdetails",paymentdetailsRoute);
app.use("/customer",customerRoute);
app.use("/payment",payment);
//10 line skip
mongoose.connect(config.URL,{useNewUrlParser:true}).then(()=>{
    console.log("Connected to MongoDB"+config.URL);
},err=>{
 console.log("Cannot connect to db"+err);
})

app.listen(PORT,()=>{
    console.log("Server is running on port"+PORT);
})
