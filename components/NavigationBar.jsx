"use client"
import Image from 'next/image';
import { useState } from 'react';

const NavigationBar = () => {
    const [ open, isOpen ] = useState(false);

    const handleShow = (bool) => {
        isOpen(bool)
    }

  return (
    <>
        <div className="navbar bg-base-100 fixed top-0 z-50">
            <div className="flex-none">

                <button className="btn btn-square btn-ghost" onClick={() => handleShow(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
                
            </div>

            <div className="flex-1">
                <a className="btn btn-ghost text-xl">UI</a>
            </div>

            <div className="flex-none">

                <div className="dropdown dropdown-end">

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image alt="Tailwind CSS Navbar component" src="https://cdn-images.imagevenue.com/bb/0e/81/ME18EFZ9_o.jpeg" height={100} width={100} />
                        </div>
                    </div>

                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>

                        <li><a>Settings</a></li>

                        <li><a>Logout</a></li>

                    </ul>
                </div>
                
            </div>

        </div>

        { open === true ? (
                <div className="bg-base-100 h-[100vh] w-72 fixed top-18 flex justify-center items-center ease-linear transition-all" id="navbar">
                    <ul className="flex justify-evenly flex-col gap-10 list-none text-xl font-semibold">

                        <button className="fixed left-64 top-[50%] btn shadow-md bg-base-200 hover:w-[5rem] hover:ease-in-out" onClick={() => handleShow(false)}>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLineJoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>

                        </button>

                        <div className="h-[50vh] flex flex-col absolute top-[5rem] left-2 gap-11 border border-t-0 border-l-0 border-r-0 px-20 border-b-orange-700">

                            <li>Home</li>
                            
                            <li>About</li>

                            <li>People</li>

                            <li>Products</li>

                            <li>Reviews</li>

                            <li>Contact us</li>
                            
                        </div>

                    </ul>
                </div>
        ) : (
            <div className="opacity-0 transition-all"></div>
        ) }
      
    </>
  )
}

export default NavigationBar
