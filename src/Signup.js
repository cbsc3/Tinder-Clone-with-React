import React from "react";
import { useState } from "react";
import axios from "axios";
import './App.css';

function Signup(){
   var [Email, setEmail] = useState('')
   var [Password, setPassword] = useState('')
   var [Username, setUsername] = useState('')
   var [IMG, setIMG] = useState('')

   function createOnSubmit(){
    var URL = 'http://localhost:5000/user/api/create/' + Username + '/' + Email + '/' + Password + '/' + IMG
    axios.post(URL)
    .then((response) => {
      console.log(response)
    })


   }
 
   
    return(
      <div className="signup">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
            
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create an Account</h2>
              <p className="mt-2 text-center text-sm text-gray-600">
               
                
              </p>
            </div>
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              
                <div>
                  <label htmlFor="email-address" className="sr-only">
                     Image
                  </label>
                  <input
                    id="img"
                    name="img"
                    type="url"
                    autoComplete="img"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Image"
                    value={IMG}
                    onChange={(e) => setIMG(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="Username" className="sr-only">
                     Username
                  </label>
                  <input
                    id="Username"
                    name="Username"
                    type="text"
                    autoComplete="Username"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="text"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
  
              <div className="flex items-center justify-between">
                <div className="flex items-center">
              
                  
                </div>
  
                <div className="text-sm">
                  
                </div>
              </div>
  
              <div>
                <button onClick={createOnSubmit}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  </span>
                  Sign up
                </button>
              </div>
          </div>
        </div>
      </div>
    )
  }

  export default Signup;