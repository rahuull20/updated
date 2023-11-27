 const mongoose=require('mongoose');

const productSchema= new mongoose.Schema({
    fa1:String,
    fa2:String,
    fa3:String,
    ieee:String,
    uid:String,
    name:String,
    cse:String,
    top:String,
    topc:String,
    py:String,
    isbn:String,
    ai:String,
    nop:String,
    doi:String,
    scc:String,
    chi:String,
    selectedValue1:String,
    selectedValue2:String,
    selectedValue3:String,
    data1:String,
    data2:String,
    userId:String,
});
module.exports= mongoose.model('products',productSchema);