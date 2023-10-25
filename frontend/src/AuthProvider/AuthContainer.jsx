import React, { createContext, useState } from 'react'

export const AuthContainVal=createContext();
function AuthContainer({children}) {

  const[products,setProducts]=useState([])
  const[cart,setCart]=useState("")
  const[listData,setListData]=useState([]);
  const[pages,setPages]=useState(0)
  const dt=JSON.parse(localStorage.getItem("item"))||[];
  const[lt,setLt]=useState(dt.length)

  
  const[price,setPrice]=useState(0);
  console.log(price)
  return (
    <AuthContainVal.Provider value={{products,setProducts,pages,setPages,cart,setCart,listData,setListData,lt,setLt,price,setPrice}}>
   {children}
    </AuthContainVal.Provider>
  )
}

export default AuthContainer
