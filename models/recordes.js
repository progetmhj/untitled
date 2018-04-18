var mongoose =require('mongoose');
var rcrdsschema=mongoose.Schema({
    idclient:{
        type:String
    },
    name:{
        type:String
    },
    postions:{
        type:String
    },
    fields:{
        type:String
    },
    keywords:{
        type:String
    },
    years:{
        type:Number,
        min:2018,
        max:3000,
        required:true
    },
    month:{
        type:Number,
        min:1,
        max:12,
        required:true
    },
    days:{
        type:Number,
        min:1,
        max:31,
        required:true

    },





})
var records =module.exports=mongoose.model('record',rcrdsschema)

