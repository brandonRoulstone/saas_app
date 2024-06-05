// "use client"
import { SvgIconSecure, SvgIconUser, SvgIconBolt, SvgIconTMS } from "../SvgIcons/SvgIcons";
const InfiniteCarousel = () => {
  return (

    <div className="bg-gradient-to-t from-blue-200 to-transparent h-[40vh] w-[100%] absolute borde-r">
        <div className="flex justify-center items-center h-[100%] gap-[9rem]">

            <div className=" font-extrabold md:text-3xl bg-gradient-to-r from-sky-400 to-indigo-700 bg-clip-text text-transparent hover:translate-y-[-.7rem] transition-all cursor-pointer">
                <div>
                    <div className="flex justify-center bg-cyan-100 w-10 rounded-full shadow-lg px-2">
                        <SvgIconUser />
                    </div>
                    Used by 100M+
                </div>
            </div>

            <div className=" font-extrabold md:text-3xl bg-gradient-to-r from-cyan-300 via-indigo-700 to-cyan-300 bg-clip-text text-transparent hover:translate-y-[-.7rem] transition-all cursor-pointer">
                <div>
                    <div className="flex justify-center bg-cyan-100 w-10 rounded-full shadow-lg px-2">
                        <SvgIconBolt />
                    </div>
                    Generate with AI.
                </div>
            </div>

            <div className=" font-extrabold md:text-3xl bg-gradient-to-r from-sky-400 to-indigo-700 bg-clip-text text-transparent hover:translate-y-[-.7rem] transition-all cursor-pointer">
                <div>
                    <div className="flex justify-center bg-cyan-100 w-10 rounded-full shadow-lg px-2">
                        <SvgIconSecure />
                    </div>
                    Safe & Secure.
                </div>
            </div>

            <div className=" font-extrabold md:text-3xl bg-gradient-to-r from-sky-400 to-indigo-700 bg-clip-text text-transparent hover:translate-y-[-.7rem] transition-all cursor-pointer">
                <div>
                    <div className="flex justify-center bg-cyan-100 w-10 rounded-full shadow-lg px-2">
                        <SvgIconTMS />
                    </div>
                    Task management.
                </div>
            </div>

        </div>
    </div>
      
   
  )
}

export default InfiniteCarousel;
