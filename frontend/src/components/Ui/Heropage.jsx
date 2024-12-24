import React from 'react'
import car from'../assets/cars.png'
const Heropage = () => {
  return (
    <div className='flex justify-between mt-[8rem]'>

      <div className="space-y-6 pl-[4rem]">
    <h1 className='font-bold font-Poppins text-[2.7rem]'>No More Waiting in Line <br /> 
        <span className='text-[#EA3C3C]'>Register Your Vehicle Online Now</span>
    </h1>
    <p className='text-gray-600'>     Our simple and efficient online vehicle registration system <br /> makes it easier than ever to get your vehicle registered.</p>

        <button className='bg-[#EA3C3C] px-7 py-2 rounded-md font-semibold text-white'>Register Now</button>
      </div>

      <div className="">
         <img src={car} />

      </div>


    </div>
  )
}

export default Heropage
