const express = require('express');
const productcatgRoute = express. Router();
var ProductCatg = require('../product/productcatg.model');

//save product category in DB
productcatgRoute.route
('/addproductcatg/:pcatgid/:pcatgname').post((req, res)=>
{
var productcatg=new ProductCatg({pcatgid:req.params.pcatgid,
pcatgname:req.params.pcatgname});
productcatg.save().then(productcatg => {
res.send('product category added successfully');
res.end();
}).catch((err) => {
res.send(err);
res.end();
});
//update product category in DB
productcatgRoute.route("/editproductcatg/").post((req, res) => {
    var productcatg=new ProductCatg(req.body);
    ProductCatg.updateOne({ "pcatgid":productcatg.pcatgid},  // Now correctly referencing pcatgid from req.body
    { "pcatgname":productcatg.pcatgname })   // Correct reference to pcatgname
    .then(productcatg => {
        res.send('Product category updated successfully');
        res.end();
    })
    .catch((err) => {
        res.send(err);
        res.end();
    });
});

//get all product category from DB
productcatgRoute.route('/showproductcatg').get((req, res)=> {
ProductCatg.find()
.then(productcatg => {
res.send(productcatg);
res.end();
})
.catch(err => {
res.send("Data not found something went wrong");
res.end();
});
});

//search product category from DB
//search
productcatgRoute.route('/searchproductcatg/:pcatgid').get((req, res) => {
    ProductCatg.findOne({ "pcatgid": req.params.pcatgid })
    .then(productcatg => {
        res.send(productcatg);
        res.end();
    })
    .catch(err => {
        res.send("Data not found, something went wrong");
        res.end();
    });
});
//delete product category form db
productcatgRoute.route('/deleteproductcatg/:pcatgid').delete((req, res) => {
    ProductCatg.deleteOne({ "pcatgid": req.params.pcatgid })
    .then(productcatg => {
        res.send("Data deleted");
        res.end();
    })
    .catch(err => {
        res.send("Data not found, something went wrong");
        res.end();
    });
});

})
module.exports = productcatgRoute