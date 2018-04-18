var express = require('express');
var app=express.Router();
var bodyparser = require('body-parser');
postule=require('../models/Postules');
app.get('/all',function (req,res) {
    postule.find({},function (err,result) {
        if (err){
            throw err;

        }
        res.send(result);
    })

});

app.get('/byy/:years', function (req, res) {
    var obj =
        {
            years:req.params.years
        }
    postule.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });

});
app.get('/byYandM/:years/:month', function (req, res) {


    var obj =
        {
            years: req.params.years,
            month :req.params.month
        }
    postule.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });


});
app.get('/byYandM/:years/:month/:days', function (req, res) {


    var obj =
        {
            years: req.params.years,
            month :req.params.month,
            days :req.params.days
        }
    postule.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });


});
app.get('/byfld/:fields', function (req, res) {
    var obj =
        {
            fields:req.params.fileds
        }
    postule.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });

});
app.get('/byYandMandfld/:years/:month/:days/:fields', function (req, res) {


    var obj =
        {
            years: req.params.years,
            month :req.params.month,
            days :req.params.days,
            fields:req.params.fields
        }
    postule.find(obj, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });


});

app.post('/ADD', function (req,res) {
    var result =req.body
    postule.create(result,function (err,result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });

});
app.put('/updt/:_id', function (req,res) {
    var result =req.body
    postule.findByIdAndUpdate(req.params._id,result,function (err,result) {

        if (err) {

            throw err;
        }
        res.send(result);

    });
});
app.delete('delte/:_id', function (req,res) {

    postule.findByIdAndRemove(req.params._id,function (err,result) {

        if (err) {

            throw err;
        }
        res.send(result);
        console.log("deleted")
    });
});




















module.exports=app;
