var express = require('express');
var app=express.Router();
var bodyparser = require('body-parser');
record=require('../models/recordes');
app.get('/all',function (req,res) {
    record.find({},function (err,result) {
        if (err){
            throw err;

        }
        res.send(result);
    })

});
app.get('/byna/:name', function (req, res) {
    var obj =
        {
            name:req.params.name
        }
    record.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });

});
app.get('/byNandY/:name/:years', function (req, res) {
    var obj =
        {
            name:req.params.name,
            years:req.params.years
        }
    record.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });

});
app.get('/byNandYandM/:name/:years/:month', function (req, res) {
    var obj =
        {
            name:req.params.name,
            years:req.params.years,
            month:req.params.month
        }
    record.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });

});
app.post('/ADD', function (req,res) {
    var result =req.body
    record.create(result,function (err,result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });

});


module.exports=app;