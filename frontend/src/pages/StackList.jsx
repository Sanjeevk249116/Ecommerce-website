import React from "react";
import { Link } from "react-router-dom";

function StackList() {
  const people = [
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      lastSeenDateTime: "2023-01-23T13:23Z",
      address:"Nadwa Bishunpur,Kushinagar,UP",
      pincode:"274401"
    },
    {
      name: "Michael Foster",
      email: "michael.foster@example.com",
      lastSeenDateTime: "2023-01-23T13:23Z",
      address:"Nadwa Bishunpur,Kushinagar,UP",
      pincode:"274401"
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      lastSeenDateTime: "2023-01-23T13:23Z",
      address:"Nadwa Bishunpur,Kushinagar,UP",
      pincode:"274401"
    },
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      lastSeenDateTime: "2023-01-23T13:23Z",
      address:"Nadwa Bishunpur,Kushinagar,UP",
      pincode:"274401"
    },
    {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      lastSeenDateTime: "2023-01-23T13:23Z",
      address:"Nadwa Bishunpur,Kushinagar,UP",
      pincode:"274401"
    },
    {
      name: "Tom Cook",
      email: "tom.cook@example.com",
      lastSeenDateTime: "2023-01-23T13:23Z",
      address:"Nadwa Bishunpur,Kushinagar,UP",
      pincode:"274401"
    },
  
  ];

  const sendData=(e,el)=>{
  

  }

  return (
    <ul role="list" className="divide-y divide-gray-100 px-32 py-11">
      {people.map((person) => (
        <Link to={'/payment'} onClick={(e)=>sendData(e,person)} >
         
       <div >
       <li key={person.email} className="flex justify-between gap-x-6 py-5 px-6 hover:bg-pink-200">
          <div className="flex min-w-0 gap-x-4" >
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {person.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {person.email}
              </p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.address}</p>
           
              <p className="mt-1 text-xs leading-5 text-gray-500">
           
             
                  {person.pincode}
                
              </p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Order at{" "}
                <time dateTime={person.lastSeenDateTime}>
                  {person.lastSeenDateTime}
                </time>
              </p>
            
          </div>
        </li>
       </div>
        </Link>
      ))}
    </ul>
  );
}

export default StackList;
