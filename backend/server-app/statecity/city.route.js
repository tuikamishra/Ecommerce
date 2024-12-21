const express=require('express');
const cityRoute=express.Router();
var City=require('./city.model');
// save state
cityRoute.route('/save').post((req,res)=>{let city=new City(req.body);
    city.save().then(city=>{res.send("city saved");
        res.end();
    }).catch(err =>{res.send("unable to save to database");
        res.end();
    });
});
// get city by state if
cityRoute.route("/getcitybystid/:stid").get((req,res)=>{
    City.find({"stid":req.params.stid}).then((city)=>{
        res.send(city);
        res.end();

    }).catch((err)=>{
        res.send(err);
        res.end();
    });
})
//show all cities
cityRoute.route('/show').get((req,res)=>{
    City.find().then((city)=>{
        res.send(city);
        res.end();

    }).catch((err)=>{
        res.send(err);
        res.end();
    })
});
 module.exports=cityRoute;
