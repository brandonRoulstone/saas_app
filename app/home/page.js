"use client"
import PropTypes from 'prop-types';
import TypeAnimationUi from '@/components/TypeAnimation';
// import Timeline from '@/components/Timeline';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatBoxUi from '@/components/ChatBoxUi';
import InfiniteCarousel from '@/components/AnimatedComponents/InfiniteCarousel';

const Landing_page = () => {
  const [boxOpen, setBoxOpen] = useState(false);


  const router = useRouter();
  
  const navigate = (path) => {
    router.push(path)
  }

  const handleOpen = (bool) => {
    setBoxOpen(bool)
  }

  return (
    <div className="min-h-[100vh] flex justify-center items-center bg-gradient-to-bl from-blue-100 to-rose-50 w-[100%] overflow-hidden px-2">

      <div className="flex w-[100%] flex-col min-h-screen justify-center items-center gap-20 sm:flex-row">

        <div className='flex flex-col'>

          <TypeAnimationUi />

          <h1 className="text-4xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-blue-700 bg-clip-text text-transparent font-semibold sm:text-7xl sm:my-4">Create your own ideas.</h1>

          <div className='flex flex-row w-[32%] md:gap-4 gap-2 pt-4 p-2 sm:flex-row sm:w-[100%] sm:px-7 md:px-0'>

            <button onClick={() => navigate('/login')} className='btn sm:w-[33%] bg-gradient-to-r from-indigo-200 to-sky-300 border-none w-[100%] text-white active:scale-[75%] transition-all'>Login</button>

            <button onClick={() => navigate('/register')} className='btn sm:w-[34%] border border-blue-500 w-[100%] text-blue-500 hover:border-blue-600 hover:text-blue-600 bg-transparent hover:bg-transparent active:scale-[75%] transition-all'>Register</button>

            <button onClick={() => navigate('/')} className='btn sm:w-[33%] bg-gradient-to-r from-sky-300 to-indigo-200 border-none w-[100%] text-white active:scale-[75%] transition-all'>Get Started</button>

          </div>
          
          <div className='flex justify-evenly'>
            <InfiniteCarousel />
          </div>


        </div>


      </div>
         
        { boxOpen === true ? (
          <ChatBoxUi />
        ) : (
          <div className='opacity-0 hidden'></div>
        )}
        { boxOpen === true ? (
          <button className='fixed right-4 bottom-0 mx-3 my-3 tooltip tooltip-left tooltip-info active:scale-[75%] transition-all' data-tip="Close" onClick={() => {handleOpen(false)}}>
            <svg className="fill-blue-500 size-14" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </button>
        ) : (
          <button className='fixed right-4 bottom-0 mx-3 my-3 tooltip tooltip-left tooltip-info active:scale-[75%] transition-all' data-tip="Open this" onClick={() => {handleOpen(true)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#3b82f6" className="size-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
            </svg>
          </button>
        ) }

    </div>
  )
}

Landing_page.propTypes = {

}

export default Landing_page;
