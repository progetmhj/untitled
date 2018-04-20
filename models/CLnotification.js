var mongoose =require('mongoose');
var clnotiSchema = mongoose.Schema({
    client_id:{
    type:String
},
    post_id:{
    type:String
},
    text:{
    type:String
}
})
var Clnoti = module.exports = mongoose.model('clnotification', clnotiSchema);
module.exports=Clnoti;