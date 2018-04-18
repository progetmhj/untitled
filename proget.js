var express = require('express');
var app=express();
var bodyparser = require('body-parser');
var con=require('./routers/Connection')
//
app.use(bodyparser.json());

var client=require('./routers/ClientR')
app.use('/client',client)

var condidat=require ('./routers/CondidateR')
app.use('/candidate',condidat)

var admin=require('./routers/AdminR')
app.use('/admin',admin)

var option=require('./routers/OptionR')
    app.use('/options',option)
app.listen(2000);
var postule=require('./routers/PostuleR')
    app.use('/postule',postule)
var record=require('./routers/recordesR')
    app.use('/record',record)
console.log("run on 2000");
