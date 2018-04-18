var mongoose =require('mongoose');
var postuleshcema=mongoose.Schema({

    description:{
        type:String,

        required:true
    },
    picture:{
        type:Buffer

    },
    tag:{
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
    fileds:{
      type:String
    }
})
var Postule =module.exports=mongoose.model('postule',postuleshcema)

module.exports=Postule;