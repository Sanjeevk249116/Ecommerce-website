import React, {  useState } from "react";

import { Link } from "react-router-dom";

function CartPages() {
  
  const listData=JSON.parse(localStorage.getItem("item"))||[]
  const [val,setVal]=useState(1);
  const[condi,setCondi]=useState(false)
  const[name,setName]=useState("")
  const[pr,setPr]=useState(null);
  
  let totalPrice=0;
  for(let i=0;i<listData.length;i++){
    totalPrice+=listData[i].price;
}
 const dataValue=(el)=>{

setPr(el.price*val)
setName(el.title)
setCondi(true);
 }
 
const handlevalue=()=>{
if(condi){
  localStorage.setItem("price",pr+65)
}else{
  localStorage.setItem("price",totalPrice+65)
}
}
 

  return (
    <>
      <div>
        <div
          className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
          id="chec-div"
        >
          <div
            className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
            id="checkout"
          >
            <div className="flex md:flex-row flex-col justify-end" id="cart">
              <div
                className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                id="scroll"
              >
                <Link to={"/"}>
                  <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-chevron-left"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="15 6 9 12 15 18" />
                    </svg>
                    <p className="text-sm pl-2 leading-none">Back</p>
                  </div>
                </Link>
                <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                  Bag
                </p>
                {listData?.map((el) => (
                  <div className="md:flex items-center mt-14 py-8 border-t border-gray-200" onClick={(e)=>dataValue(el)}>
                    <div className="w-1/2 h-56">
                      <img
                        src={el.thumbnail}
                        alt={el.title}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="md:pl-3 md:w-3/4">
                      <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                        {el.brand}
                      </p>
                      <div className="flex items-center justify-between w-full pt-1">
                        <p className="text-base font-black leading-none text-gray-800">
                          {el.title}
                        </p>
                        <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none" onChange={(e)=>setVal(e.target.value)}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <p className="text-xs leading-3 text-gray-600 pt-2">
                       Rating: {el.rating}
                      </p>
                      <p className="text-xs leading-3 text-gray-600 py-4">
                        {el.category}
                      </p>
                      <p className="w-96 text-xs leading-3 text-gray-600">
                        {el.description}
                      </p>
                      <div className="flex items-center justify-between pt-5 pr-6">
                        <div className="flex itemms-center">
                          <p className="text-xs leading-3 underline text-red-500  cursor-pointer">
                            Remove
                          </p>
                        </div>
                        <p className="text-base font-black leading-none text-gray-800">
                          ${el.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                  <div>
                    <p className="text-4xl font-black leading-9 text-gray-800">
                      Summary
                    </p>
                    <p className="text-2xl font-black pt-5 text-red-800">
                      {setCondi?name:null}
                    </p>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Subtotal
                      </p>
                      <p className="text-base leading-none text-gray-800">
                       ${condi?pr:totalPrice}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Shipping
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        $30
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Tax
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        $35
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl leading-normal text-gray-800">
                        Total
                      </p>
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                        ${condi?pr+65:totalPrice+65}
                      </p>
                    </div>
                    <Link to={"/checkout"}>
                      <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white" onClick={handlevalue}>
                        Checkout
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {` /* width */
        #scroll::-webkit-scrollbar {
            width: 1px;
        }

        /* Track */
        #scroll::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        /* Handle */
        #scroll::-webkit-scrollbar-thumb {
            background: rgb(133, 132, 132);
        }
`}
      </style>
    </>
  );
}

export default CartPages;
