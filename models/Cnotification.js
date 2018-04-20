var mongoose =require('mongoose');
var cnotiSchema = mongoose.Schema({
    condi_id:{
        type:String
    },
    post_id:{
        type:String
    },
    text:{
        type:String
    }
})
var Cnoti = module.exports = mongoose.model('cnotification', cnotiSchema);
module.exports=Cnoti;