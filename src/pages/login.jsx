'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { NavLink ,useNavigate} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/store'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/msg/msgSlice'

export default function Login() {
  
  const navigate = useNavigate();
  const [name,setName]=useState("");
  const dispatch=useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/dashboard/personal"); 
    dispatch(setUser(name));
  };

  return (
    
    
          <div className="flex  mt-10 min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Log in to your account
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                   Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="Username"
                      name="Username"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div className=" flex justify-center text-sm/6 font-medium text-gray-900">
                     <NavLink
                     to="/forms/signup">
                     Sign Up?
                     </NavLink>
                 </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log in
                  </button>
                </div>
              </form>
    
              <p className="mt-10 text-center text-sm/6 text-gray-500">
                Not a member?{' '}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Start a 14 day free trial
                </a>
              </p>
            </div>
          </div>
    
  )
}
