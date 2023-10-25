const { CartModels } = require("../models/cards");

exports.cartItems = async (req, res) => {

    const {title,description} = req.body;
    // console.log(pro.title)
    const dts=await CartModels.findOne({title,description});
    console.log(dts)
    if(dts){
        console.log("found");
        console.log(dts)
        return;
    }

    console.log(pro);
    try {
      await pro.save();
  
      const dt = await CartModels.find();
      res.send({ msg: dt });
    } catch (err) {
      console.log("not posted");
    }
  };