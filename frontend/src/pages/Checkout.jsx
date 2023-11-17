import React, { useState } from "react";
import { Link } from "react-router-dom";
function Checkout() {

  const [details,setDetails]=useState({
    name:"",
    last:"",
    email:"",
    phone:0,
    DOB:0,
    address:"",
    checkbox:true,
})

console.log(details)
const chartData=(e)=>{

  e.preventDefault()
  console.log("data")

}


  return (
    <div>
      <form action="">
        <div className="w-full bg-white p-10 lg:pl-96">
          <p tabIndex={0}  aria-label="profile information" className="focus:outline-none text-3xl font-bold text-gray-800 mt-1">
            Profile info
          </p>
          <p
            role="contentinfo"
            className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
          >
            Fill in the data for profile. It will take a couple of minutes.{" "}
            
          </p>
          <p
            
            aria-label="enter Personal data"
            className="text-xl font-semibold leading-7 text-gray-800 mt-10"
          >
            Personal data
          </p>
          <p className="text-sm font-light leading-none text-gray-600 mt-0.5">
            Your details and place of birth
          </p>
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                First name
              </label>
              <input  onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
                type="name"
                name="name"
                tabIndex={0}
                aria-label="Enter first name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter first name"
                
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Last name
              </label>
              <input onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
                type="name"
                name="last"
                tabIndex={0}
                aria-label="Enter last name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Email Address
              </label>
              <input onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
                type="email"
                name="email"
                tabIndex={0}
                aria-label="Enter email Address"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="smith.william@gmail.com"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Phone number
              </label>
              <input onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
                type="number"
                name="phone" 
                tabIndex={0}
                aria-label="Enter phone number"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="+91-9876543210"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Date of birth
              </label>
              <input onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
                type="date"
                name="DOB"
                tabIndex={0}
                aria-label="Enter date of birth"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                defaultValue="28.03.1997"
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Address
              </label>
              <input onChange={(e)=>setDetails({...details,[e.target.name]:e.target.value})}
                type="name"
                name="address"
                tabIndex={0}
                aria-label="Enter place of birth"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                placeholder="San Diego, CA, USA"
              />
            </div>
          </div>
          <div className="mt-6">
            <div className="py-1 flex items-center">
              <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input onChange={(e)=>setDetails({...details,[e.target.name]:e.target.checked})}
                  type="checkbox"
                  name="checkbox"
                  tabIndex={0}
                  aria-label="I agree with the terms of service"
                  defaultChecked
                  className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                />
                <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                  <svg
                    className="icon icon-tabler icon-tabler-check"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
              <p className="text-sm leading-none ml-2">
                I agree with the{" "}
                <span className="text-indigo-700">terms of service</span>
              </p>
            </div>
          </div>
          
            <button onClick={(e)=>chartData(e)}
              type="submit"
              aria-label="Next step"
              className="flex items-center justify-center py-2 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-7 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            >
              <span className="text-sm font-medium text-center text-gray-800 capitalize">
                Next Step
              </span>
              <svg
                className="mt-1 ml-3"
                width={12}
                height={8}
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
              </svg>
            </button>
        
          <div className="mt-6 mx-16 text-red-950 text-1xl">
          <h1>Or</h1>
          </div>
          <Link to={"/stacklist"}>
            <button
              type="submit"
              className="flex items-center justify-center py-2 px-7 focus:outline-none bg-gray-50 border rounded border-gray-400 mt-7 md:mt-7 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            >
              <span className="text-sm font-medium text-center text-gray-800 capitalize">
                Choose Address from Existing Address
              </span>
              <svg
                className="mt-1 ml-3"
                width={12}
                height={8}
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
              </svg>
            </button>
          </Link>
        </div>
      </form>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      ",
        }}
      />
    </div>
  );
}

export default Checkout;
