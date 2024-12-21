// const { collection } = require("./bill.model");

// var mongoose=require('mongoose');
// const Schema=mongoose.Schema;
// var PaymentDetails=new Schema({
//     orderCreationId:{type:String},
//     razorpayPaymentId:{type:String},
//     razorpayOrderId:{type:String},
//     cid:{type:Number},
//     billid:{type:Number},
//     amount:{type:Number}
// },
// {
//     collection:'PaymentDetails'
// }
// );
// module.exports=mongoose.model('PaymentDetails',PaymentDetails);
const { collection } = require("./bill.model");

var mongoose=require('mongoose');
const Schema=mongoose.Schema;
var PaymentDetails=new Schema({
    orderCreationId:{type:String},
    razorpayPaymentId:{type:String},
    razorpayOrderId:{type:String},
    cid:{type:Number},
    billid:{type:Number},
    amount:{type:Number}
},
{
    collection:'PaymentDetails'
}
);
module.exports=mongoose.model('PaymentDetails',PaymentDetails);