var mongoose=require("mongoose");
// noinspection JSAnnotator
var testshema=mongoose.Schema({
    first_name:{
        type: String,

    },
    age :{
        type : Number,
        index:{ unique : true}

    },
    last_name:{
        type: String,

    },
    create_date:{
        type:Date,
        default :Date.now
    }

});
 var Test =module.exports=mongoose.model('test',testshema)

module.exports=Test;

