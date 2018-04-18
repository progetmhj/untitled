var express = require('express');
var app =express.Router();
var bodyparser = require('body-parser');
admin=require('../models/Admin');

app.get('/all',function (req,res) {
    admin.find({},function (err,result) {
        if (err){
            throw err;
        }
        res.send(result);
    })
});
app.get('/find/:_id', function (req, res) {

    admin.findById(req.params._id, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);

        console.log("by id found");

    });


});
app.get('/byfnorln/:fnorln', function (req, res) {


    var obj1 =
        {
            first_name:req.params.fnorln
        }
    var obj2 =
        {
            last_name:req.params.fnorln

        }
    admin.find({$or:[obj1,obj2]}, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);

        console.log("by cordo found");
    });


});
app.get('/login/:useroremail/:password', function (req, res) {


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
    admin.find({$or:[obj1,obj2]}, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);

        console.log("by cordo found");
    });


});
app.get('/byr/:roles', function (req, res) {
    var obj =
        {
            roles:req.params.roles
        };
    admin.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);

        console.log("by field found");
    });

});
module.exports=app;