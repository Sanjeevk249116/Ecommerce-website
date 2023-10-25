
const { UserModels } = require("../models/products");

exports.productItems = async (req, res) => {
  const pro = new UserModels(req.body);
  console.log(pro);
  try {
    await pro.save();

    const dt = await UserModels.find();
    res.send({ msg: dt });
  } catch (err) {
    console.log("not posted");
  }
};

exports.getData = async (req, res) => {
  const products = await UserModels.find();
  res.send({ products });
};
