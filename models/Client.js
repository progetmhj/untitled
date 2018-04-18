var mongoose=require("mongoose");
// noinspection JSAnnotator
var clientshema=mongoose.Schema({
    name:{
        type: String,
        required :true
       


    },
    Email :{
        type : String,
        required : true


    },
    Phone:{
        type: Number,
        required : true

    },
    Username:{
        type: String,
        required :true

    },
    Ncontrat:{
        type: String,

    },
    /*clientID:{
        type: Number,
        autoIncrement : true

    },*/
    country:{
        type: String,
        required : true

    },
    Adress:{
        type: String,

    },
    create_date:{
        type:Date,
        default :Date.now
    },
    fields:{
        type:String,
        required:true
    }

});
var Client =module.exports=mongoose.model('client',clientshema)

module.exports=Client;