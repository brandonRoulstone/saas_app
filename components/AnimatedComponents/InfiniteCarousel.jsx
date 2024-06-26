// "use client"
import { SvgIconSecure, SvgIconUser, SvgIconBolt, SvgIconTMS } from "../SvgIcons/SvgIcons";
const InfiniteCarousel = () => {
  return (

    <div className="bg-transparent h-[30vh] max-w-[100%] overflow-x-scroll absolute borde-r">
        <div className="md:flex justify-center grid grid-cols-2 ms-5 items-center h-[100%] lg:gap-[5rem] gap-[1rem]">

            <div className="font-extrabold md:text-3xl bg-gradient-to-r from-sky-400 to-indigo-700 bg-clip-text text-transparent hover:translate-y-[-.7rem] transition-all cursor-pointer">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-center bg-cyan-100 w-10 rounded-full shadow-lg px-2">
                        <SvgIconUser />
                    </div>
                    Used by 10M+
                </div>
            </div>

            <div className="font-extrabold md:text-3xl bg-gradient-to-r from-cyan-300 via-indigo-700 to-cyan-300 bg-clip-text text-transparent hover:translate-y-[-.7rem] transition-all cursor-pointer">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-center bg-cyan-100 w-10 rounded-full shadow-lg px-2">
                        <SvgIconBolt />
                    </div>
                    Generate with AI.
                </div>
            </div>

            <div className="font-extrabold md:text-3xl bg-gradient-to-r from-sky-400 to-indigo-700 bg-clip-text text-transparent hover:translate-y-[-.7rem] transition-all cursor-pointer">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-center bg-cyan-100 w-10 rounded-full shadow-lg px-2">
                        <SvgIconSecure />
                    </div>
                    Safe & Secure.
                </div>
            </div>

            <div className="font-extrabold md:text-3xl bg-gradient-to-r from-sky-400 to-indigo-700 bg-clip-text text-transparent hover:translate-y-[-.7rem] transition-all cursor-pointer">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-center bg-cyan-100 w-10 rounded-full shadow-lg px-2">
                        <SvgIconTMS />
                    </div>
                    Collaborative Enviroment.
                </div>
            </div>

        </div>
    </div>
      
   
  )
}

export default InfiniteCarousel;
