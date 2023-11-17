const mongoose=require("mongoose");

const AdressModels=new mongoose.Schema({
    name:{type:String,required:true},
    last:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    DOB:{type:Number,required:true},
    phone:{type:Number,required:true},
    address:{type:String,required:true}
})



const addressModels=mongoose.model("address",AdressModels)
