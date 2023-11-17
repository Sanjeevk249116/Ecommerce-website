const express=require("express");
const cors=require("cors");
const { getData, getDetails, postProduct } = require("../AllDetails/products");
const { itemsPost, getItems, deleteData } = require("../AllDetails/carts");

const Router=express.Router();


Router.use(cors({
    origin:"*"
}))

Router.get("/",getData)
Router.get("/productdetails/:id",getDetails)
Router.post("/postItems",postProduct)
Router.post("/cartpage/",itemsPost)
Router.get("/cartpage/items",getItems)
Router.delete("/cartpage/items",deleteData)


module.exports={Router};