var mongo=require("mongoose")
const Schema=mongo.Schema
const Batiment=new Schema({
    nom:String,
    nb_niveau:Number,
    description:String,
    adresse:String
})

module.exports=mongo.model("batiment",Batiment) 
