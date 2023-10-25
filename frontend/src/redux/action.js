import { GET_DATA_ERROR, GET_DATA_SUCCESS } from "./actionType";
import axios from "axios"
const url="https://dummyjson.com/products";
// const url="http://localhost:8090/"

export const getData=(num)=>async(dispatch)=>{
   try{
    const result=await axios.get(`${url}`);
   
    dispatch({type:GET_DATA_SUCCESS,payload:result.data})
   }catch(err){
    console.log(GET_DATA_ERROR)
   }
}
