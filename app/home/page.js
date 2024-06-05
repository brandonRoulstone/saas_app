"use client"
import PropTypes from 'prop-types';
import TypeAnimationUi from '@/components/TypeAnimation';
// import Timeline from '@/components/Timeline';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatBoxUi from '@/components/ChatBoxUi';

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

            <button onClick={() => navigate('/login')} className='btn sm:w-[33%] bg-gradient-to-r from-indigo-200 to-sky-300 border-none w-[100%] text-white hover:bg-blue-700'>Login</button>

            <button onClick={() => navigate('/register')} className='btn sm:w-[34%] border border-blue-500 w-[100%] text-blue-500 hover:border-blue-600 hover:text-blue-600 bg-transparent hover:bg-transparent'>Register</button>

            <button onClick={() => navigate('/')} className='btn sm:w-[33%] bg-gradient-to-r from-sky-300 to-indigo-200 border-none w-[100%] text-white hover:bg-blue-700'>Get Started</button>

              
          </div>

        </div>

      </div>
        
        { boxOpen === true ? (
          <ChatBoxUi />
        ) : (
          <div className='opacity-0 hidden'></div>
        )}
        { boxOpen === true ? (
          <button className='animate-pulse fixed right-4 bottom-0 mx-3 my-3 tooltip tooltip-left tooltip-info' data-tip="Close" onClick={() => {handleOpen(false)}}>
            <svg className="fill-blue-500 size-14" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </button>
        ) : (
          <button className='animate-pulse fixed right-4 bottom-0 mx-3 my-3 tooltip tooltip-left tooltip-info' data-tip="Open this" onClick={() => {handleOpen(true)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3b82f6" className="size-14">
              <path strokeLinecap="round" strokeLineJoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        ) }

    </div>
  )
}

Landing_page.propTypes = {

}

export default Landing_page;
