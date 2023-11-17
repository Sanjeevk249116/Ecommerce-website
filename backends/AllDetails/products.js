const { productModels } = require("../models/products");

exports.getData = async (req, res) => {
  const products = await productModels.find();
  res.send({ products });
};

exports.getDetails = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const products = await productModels.findOne({ _id: id });
  res.send({ products });
};


exports.postProduct=async(req,res)=>{
  const dt=await productModels(req.body);
    try{
      await dt.save();
    }catch(err){
      console.log("error in post")
    }
}
