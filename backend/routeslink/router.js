const express=require('express');
const cors=require("cors");
const { productItems, getData } = require('../Allitems/product');
const { cartItems } = require('../Allitems/cart');

const Router=express.Router();

Router.use(cors({
    origin:"*"
}))

Router.get("/", getData);

Router.post('/products',productItems);

Router.post('/cartpage',cartItems);



module.exports={Router}