import React from 'react'
import car from'../assets/cars.png'
const Heropage = () => {
  return (
    <div className=' flex justify-between  mt-[8rem] '>

      <div className="pl-[4rem] space-y-6 ">
    <h1 className=' text-[2.7rem] font-bold font-Poppins  '>No More Waiting in Line <br /> 
        <span className='text-[#EA3C3C]'>Register Your Vehicle Online Now</span>
    </h1>
    <p className=' text-gray-600'>     Our simple and efficient online vehicle registration system <br /> makes it easier than ever to get your vehicle registered.</p>

        <button className=' bg-[#EA3C3C] py-2 px-7 
        rounded-md text-white font-semibold '>Register Now</button>
      </div>

      <div className="">
         <img src={car} />

      </div>


    </div>
  )
}

export default Heropage
