var mongoose =require('mongoose');
var optionschema=mongoose.Schema({

    fields:{
        type:String
    },
    position:{
        type:String
    }




})
var options =module.exports=mongoose.model('Option',optionschema);
module.exports=options;