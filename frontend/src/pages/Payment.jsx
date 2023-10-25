import React, { useState } from "react";
import { Link } from "react-router-dom";
function Payment() {
  const countries = ["China", "Russia", "UK","India"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("India");
  let price=localStorage.getItem("price")
  const changeText = (e) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="py-10 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex justify-start flex-col items-start space-y-2">
           
           <Link to={'/checkout'}>
           <button className="flex flex-row items-center text-gray-600 hover:text-gray-500 space-x-1">
              <svg
                className="fill-stroke"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.91681 7H11.0835"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7L5.25014 9.33333"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.91681 7.00002L5.25014 4.66669"
                  stroke="currentColor"
                  strokeWidth="0.666667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm leading-none">Back</p>
            </button>
           </Link>
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
             Payment
            </p>
            <p className="text-2xl lg:text-1xl font-semibold leading-7 pt-5 lg:leading-9 text-gray-800">
            Total Price: ${price}
            </p>
           
          </div>

          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            

            <div className="p-8 bg-gray-100 flex flex-col lg:w-full ">
             <Link to={'/success'}>
             <button className="border border-transparent hover:border-gray-300 bg-red-900 hover:bg-blue-400 text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 mb-10 rounded w-full">
                
                <div>
                  <p className="text-base leading-4">Cash on Delivery</p>
                </div>
              </button>
             </Link>
              <button className="border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
                
                <div>
                  <p className="text-base leading-4">Pay with UPI</p>
                </div>
              </button>

              <div className="flex flex-row justify-center items-center mt-6">
                <hr className="border w-full" />
                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">
                  or pay with card
                </p>
                <hr className="border w-full" />
              </div>

              <div className="mt-8">
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Card details
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="0000 1234 6549 15151"
                  />
                </div>
                <div className="flex-row flex">
                  <input
                    className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="MM/YY"
                  />
                  <input
                    className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="CVC"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Name on card
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="email"
                    placeholder="Name on card"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800">
                Country or region
              </label>
              <div className="mt-2 flex-col">
                <div className="relative">
                  <button
                    className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-white"
                    type="email"
                  >
                    {country}
                  </button>
                  <svg
                    onClick={() => setMenu(!menu)}
                    className={
                      "transform  cursor-pointer absolute top-4 right-4 " +
                      (menu ? "rotate-180" : "")
                    }
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 5.75L8 10.25L12.5 5.75"
                      stroke="#27272A"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div
                    className={
                      "mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " +
                      (menu ? "block" : "hidden")
                    }
                  >
                    {countries.map((country) => (
                      <div
                        key={country}
                        className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                        onClick={changeText}
                      >
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
              
              </div>

              <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
                <div>
                  <p className="text-base leading-4">Pay ${price}</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
