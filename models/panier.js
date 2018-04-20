var mongoose =require('mongoose');
var panierSchema = mongoose.Schema({
    id_client:{
        type:String,
        required:true
    },
    id_condi:{
        type:String,
        required:true
},
    condi_name:{
        type:String,
        required:true
    },
    field:{
        type:String,
        requires:true
    },
    position:{
       type:String,
        required:true
    }
});
var Panier = module.exports = mongoose.model('Panier', panierSchema);
module.exports=Panier;