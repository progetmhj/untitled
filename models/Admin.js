var mongoose =require('mongoose');
var adminshema=mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name :{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
      type:String
    },
    roles:{
        type:[String]
    }
});
var Admin =module.exports=mongoose.model('Admin',adminshema);
module.exports=Admin;