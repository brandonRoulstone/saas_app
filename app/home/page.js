"use client"
import PropTypes from 'prop-types';
import TypeAnimationUi from '@/components/TypeAnimation';
import Timeline from '@/components/Timeline';

const Landing_page = () => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center bg-zinc-900 w-[100%] overflow-hidden">

        <div className="flex w-[100%] flex-col min-h-screen justify-center items-center gap-20 sm:flex-row">

            <div className='flex flex-col'>

                <TypeAnimationUi className="text-[.5rem] w-[100%] text-white"/>

                <h1 className="text-xl text-purple-600 font-semibold sm:text-5xl">Write your own story.</h1>

                <div className='flex flex-col gap-4 pt-4 p-2 sm:flex-row sm:w-[100%]'>

                    <button className='btn sm:w-[50%] bg-purple-600 w-[100%] text-white hover:bg-purple-700'>Login</button>

                    <button className='btn sm:w-[50%] border border-white w-[100%] text-white hover:border-purple-600 hover:text-purple-600'>Register</button>

                </div>

            </div>

        </div>

        
    </div>
  )
}

Landing_page.propTypes = {

}

export default Landing_page;
