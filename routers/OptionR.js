var express = require('express');
var app =express.Router();
var bodyparser = require('body-parser');
option=require('../models/Options');

app.get('/all',function (req,res) {
    option.distinct("fields",function (err,result) {
        if (err){
            throw err;
        }
        res.send(result);
    })
});
app.get('/posbyfld/:fields', function (req, res) {
    var obj =
        {
            fields:req.params.fields
        };
    option.find(obj,{position:1,_id:0}, function (err, result) {

        if (err) {

            throw err;
        }
        res.send(result);

    });

});
app.post('/ADD', function (req,res) {
    var result =req.body
    option.create(result,function (err,result) {

        if (err) {

            throw err;
        }
        res.send(result);


    });

});
app.put('/updt/:_id', function (req,res) {
    var result =req.body
    option.findByIdAndUpdate(req.params._id,result,function (err,result) {

        if (err) {

            throw err;
        }
        res.send(result);

    });
});
app.delete('delte/:_id', function (req,res) {

    option.findByIdAndRemove(req.params._id,function (err,result) {

        if (err) {

            throw err;
        }
        res.send(result);
        console.log("deleted")
    });
});
























module.exports=app;