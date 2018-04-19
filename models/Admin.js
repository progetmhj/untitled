var mongoose =require('mongoose');
var adminshema=mongoose.Schema({
    first_name:{
        type:String,
       required:true
    },
    last_name :{
        type:String,
        required:true
    },
    username:{
        type:String,
        lowercase:true,
        unique:true,
        required:true
    },
    email:{
        type:String,
        lowercase:true,
        unique:true,
        required:true
    },
    password:{
      type:String,
        required:true
    },
    roles:{
        type:[String]
    }
});
var Admin =module.exports=mongoose.model('Admin',adminshema);
module.exports=Admin;