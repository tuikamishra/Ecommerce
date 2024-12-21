var mongoose= require('mongoose');
const Schema=mongoose.Schema;
var City=new Schema({
    ctid:{type:Number},
    ctname:{type:String},
    stid:{type:Number}
},{
    collection:'City'
});
module.exports=mongoose.model('City',City);


// //new
// var mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// var CitySchema = new Schema({
//     ctid: { type: Number, required: true },
//     ctname: { type: String, required: true },
//     stid: { type: Number, required: true }
// }, {
//     collation: { locale: 'en', strength: 2 }
// });

// module.exports = mongoose.model('City', CitySchema);
