"use client"

const DashboardUI = () => {
  return (
    <>
        <div className="h-screen flex flex-col justify-center items-center w-[100%] md:flex-row">

            {/* Start component */}
            <div className="lg:w-[25%] w-[100%] flex justify-center h-screen items-center bg-gray-200">
                Section one
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

export default DashboardUI;
