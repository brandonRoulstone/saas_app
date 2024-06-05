"use client"
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const NavigationBar = () => {
    const [ open, isOpen ] = useState(false);

    const handleShow = (bool) => {
        isOpen(bool)
    }

  return (
    <>
        <div className="navbar bg-zinc-50 fixed top-0 z-50">
            <div className="flex-none">
                <label className="btn bg-transparent border-none btn-circle swap swap-rotate hover:bg-slate-200">

                    {/* this hidden checkbox controls the state */}

                    { open !== true ? (
                        <input type="checkbox" onClick={() => handleShow(true)} />
                    ) : (
                        <input type="checkbox" onClick={() => handleShow(false)} />
                    )}
                    
                    <svg className="swap-off fill-blue-500 z-50" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    
                    {/* close icon */}
                    <svg className="swap-on fill-blue-500 z-50" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                
                </label>                
            </div>

            <div className="flex-1 px-6 z-50">
                <Link href="/" className="text-xl text-blue-500 font-semibold flex">
                    W R 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mx-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    T I F Y Y . . .
                </Link>
            </div>

            <div className="flex-none">

                <div className="dropdown dropdown-end">

                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <Image alt="Tailwind CSS Navbar component" src="https://cdn-images.imagevenue.com/2a/43/92/ME18FB6H_o.jpeg" height={100} width={100} />
                        </div>
                    </div>

                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>

                        <li><Link href="/">Settings</Link></li>

                        <li><Link href="/">Logout</Link></li>

                    </ul>
                </div>
                
            </div>

        </div>

        { open === true ? (
                <div className="translate-nav bg-zinc-50 h-[100vh] w-72 fixed top-18 flex justify-center items-center ease-linear transition-all z-10" id="navbar">
                    <ul className="flex justify-evenly flex-col list-none text-xl font-semibold">

                        <div className="h-[100vh] flex flex-col justify-center min-w-[100%] items-center top-[5rem] gap-11 text-zinc-700">

                            <li><Link href="/">Home</Link></li>

                            <li><Link href="/">About</Link></li>

                            <li><Link href="/">People</Link></li>

                            <li><Link href="/dashboard">Dashboard</Link></li>

                            <li><Link href="/">Contact us</Link></li>

                        </div>

                    </ul>
                </div>
        ) : (
            <div className="opacity-0 transition-all"></div>
        ) }
      
    </>
  )
}

export default NavigationBar;
