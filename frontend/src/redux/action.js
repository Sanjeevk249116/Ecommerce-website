import { GET_DATA_ERROR, GET_DATA_SUCCESS, POST_ITEMS_SUCCESS } from "./actionType";
import axios from "axios"
const url="https://dummyjson.com/products";
// const url="http://localhost:9090/"
const url1="http://localhost:9090/cartpage";


export const getData=(num)=>async(dispatch)=>{
   try{
    const result=await axios.get(`${url}`);
   
    dispatch({type:GET_DATA_SUCCESS,payload:result.data})
   }catch(err){
    console.log(GET_DATA_ERROR)
   }
}


export const PostItemsData=(el)=>async(dispatch)=>{
   try{
     const data = el;
      axios.post(url1, data)
      .then(response => {
         dispatch({type:POST_ITEMS_SUCCESS})
      })
     }catch(err){
    console.log("error data");
   }
}




