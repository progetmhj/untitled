var mongoose=require("mongoose");
// noinspection JSAnnotator
var clientshema=mongoose.Schema({
    name:{
        type: String,
        required :true
       


    },
    email :{
        type : String,
        required : true,
        unique:true,
        lowercase:true


    },
    Phone:{
        type: Number,
        required : true

    },
    username:{
        type : String,
        required : true,
        unique:true,
        lowercase:true

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