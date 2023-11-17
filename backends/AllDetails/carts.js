const { itemsModels } = require("../models/items")

exports.itemsPost=async(req,res)=>{
    const {id}=req.body
    console.log(id)
   
    try{
        const data=await itemsModels.findOne({_id:id});
        if(data){
            return res.send({msg:"item already added to cart"})
        }
        const dt=new itemsModels(req.body)
        await dt.save();
    }catch(err){
        console.log("item not add to card");
    }
}

exports.getItems = async (req, res) => {
    const products = await itemsModels.find();
    res.send({ products });
  };

  exports.deleteData=async(req,res)=>{
    const {id}=req.headers
  console.log(id)
    
    const products=await itemsModels.deleteOne({_id:id})
    res.send({products})
  }