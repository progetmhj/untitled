var express = require('express');
var app =express.Router();
var bodyparser = require('body-parser');
condidate=require('../models/Condidat');

app.get('/all',function (req,res) {
    condidate.find({},function (err,result) {
        if (err){
            throw err;

        }
        res.send(result);
    })


});
app.get('/find/:_id', function (req, res) {

    condidate.findById(req.params._id, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);

        console.log("by id found");

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
    condidate.find({$or:[obj1,obj2]}, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);

        console.log("by cordo found");
    });


});
app.get('/byfandp/:fld/:posi', function (req, res) {
    var obj =
        {
            fields :req.params.fld,
            position: req.params.posi

        }
    condidate.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });


});
app.get('/byf/:fields', function (req, res) {
    var obj =
        {
            fields:req.params.fields
        };
    condidate.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);

        console.log("by field found");
    });

});
app.get('/byn/:fname', function (req, res) {
    var obj =
        {
            first_name: req.params.fname
        };
    condidate.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);
        console.log("by first name found");

    });

});
app.get('/byyex/:yofexp', function (req, res) {


    var obj =
        {
            yofexp:req.params.yofexp
        }
    condidate.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });


});
app.get('/byfandpandyexp/:fld/:posi/:yofexp', function (req, res) {
    var obj =
        {
            fields :req.params.fld,
            position: req.params.posi,
            yofexp:req.params.yofexp

        }
    condidate.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });


});
app.post('/ADD', function (req,res) {
    var result =req.body
    condidate.create(result,function (err,result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });

});
app.put('/updt/:_id', function (req,res) {
    var result =req.body
    condidate.findByIdAndUpdate(req.params._id,result,function (err,result) {

        if (err) {

            throw err;
        }
        res.send(result);

    });
});
app.delete('delte/:_id', function (req,res) {

    condidate.findByIdAndRemove(req.params._id,function (err,result) {

        if (err) {

            throw err;
        }
        res.send(result);
        console.log("deleted")
    });
});
module.exports=app;