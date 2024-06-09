// import { useOthers } from "../../liveblocks.config";
// https://liveblocks.io/docs/authentication/id-token
// for later authentication

const MainDashboard = () => {
  return (
    <>

        <div className="h-screen flex flex-col justify-center items-center w-[100%] md:flex-row">

        {/* Start component */}
        <div className="lg:w-[25%] w-[100%] flex justify-center h-screen items-center bg-gray-200">

            Section left

        </div>


        <div className="lg:w-[50%] w-[100%] flex justify-center h-screen items-center">
            <div className="p-4 overflow-y-scroll max-h-[15rem]">
                <div className="grid grid-cols-3 gap-4">

                    <div className="bg-white p-4 rounded shadow" id="slide1">
                        <h2 className="text-xl font-bold mb-2">Current Project</h2>
                        <p>Working on: The Great Novel</p>
                        <p>Words written: 20,000</p>
                    </div>

                    <div className="bg-white p-4 rounded shadow" id="slide2">
                        <h2 className="text-xl font-bold mb-2">Progress</h2>
                        <p>Words written today: 1,000</p>
                        <p>Goal: 2,000 words/day</p>
                    </div>

                    <div className="bg-white p-4 rounded shadow" id="slide3">
                        <h2 className="text-xl font-bold mb-2">Notes</h2>
                        <p>Remember to edit chapter 3.</p>
                    </div>

                </div>
            </div>
        </div>



        {/* End component */}
        <div className="lg:w-[25%] w-[100%] flex justify-center h-screen items-center bg-gray-200">
            Section three
        </div>

        </div>
      
    </>
  )
}

export default MainDashboard
