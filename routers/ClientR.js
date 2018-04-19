var express = require('express');
var app=express.Router();
var bodyparser = require('body-parser');
client=require('../models/Client');
// Afficher LES CLIENT
app.get('/all',function (req,res) {
    client.find({},function (err,result) {
        if (err){
            throw err;

        }
        res.send(result);
    })

});
//FIND BY id
app.get('/find/:_id', function (req, res) {

    client.findById(req.params._id, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);

console.log("by id found")  });


});
//FIND BY useroremail and pass
app.get('/byusandp/:useroremail/:password', function (req, res) {


    var obj1 =
        {
            email: req.params.useroremail,
            password :req.params.password
        }
    var obj2 =
        {
            username:req.params.useroremail,
            password:req.params.password

        }
    client.find({$or:[obj1,obj2]}, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });


});
//FIND BY name&field
app.get('/bynandf/:name/:fields', function (req, res) {


    var obj =
        {
            name: req.params.name,
            fields :req.params.fields
        }
    client.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);
        console.log("by name and field found");

    });


});
//FIND BY name
app.get('/byn/:name', function (req, res) {


    var obj =
        {
            name:req.params.name
        }
    client.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);

        console.log("by name found");
    });


});
//FIND BY field
app.get('/byf/:fields', function (req, res) {
    var obj =
        {
            fields:req.params.fields
        }
    client.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });

});
//ADDITION
app.post('/ADD', function (req,res) {
    var result =req.body
    client.create(result,function (err,result) {

        if (err){
            if (err.code==11000){
                console.log("already exist")
            }
            else
                throw err

        }


        res.send(result);

    });
});
//update by ID
app.put('/updt/:_id', function (req,res) {
    var result =req.body
    client.findByIdAndUpdate(req.params._id,result,function (err,result) {

        if (err){
            if (err.code==11000){
                console.log("already exist")
            }
            else
                throw err

        }


        res.send(result);

    });
});
//remove by ID
app.delete('delte/:_id', function (req,res) {

    client.findByIdAndRemove(req.params._id,function (err,result) {

        if (err) {

            throw err;
        }
        res.send(result);
        console.log("deleted")
    });
});

module.exports=app;