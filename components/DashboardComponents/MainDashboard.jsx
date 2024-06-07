import { useOthers } from "../../liveblocks.config";
// https://liveblocks.io/docs/authentication/id-token
// for later authentication

const MainDashboard = () => {
    const others = useOthers();
    const userCount = others.length;
  return (
    <>

        <div className="h-screen flex flex-col justify-center items-center w-[100%] md:flex-row">

        {/* Start component */}
        <div className="lg:w-[25%] w-[100%] flex justify-center h-screen items-center bg-gray-200">
            Section { userCount }ne
        </div>



        {/* Center component */}
        <div className="lg:w-[50%] w-[100%] flex justify-center h-screen items-center">
            Section two
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
