import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='flex  justify-between items-center mx-[5rem] mt-[1rem] '>
      <h1 className=' text-[1.5rem] text-[#EA3C3C] font-semibold font-Poppins '>CarLink</h1>

      {/* Navigation Bars */}
      <div className="">
        <ul className=' flex space-x-5 '>
           <Link  to='/' className='  font-semibold  hover:border-b-2 border-black text-gray-500 hover:text-black pb-[0.4rem] ' href="">Home</Link>
            <Link to='/service' className=' font-semibold  hover:border-b-2 border-black  text-gray-500 hover:text-black pb-[0.4rem] ' href="">Service</Link>
            <Link to='/system' className='  font-semibold hover:border-b-2 border-black  text-gray-500 hover:text-black pb-[0.4rem]  ' href="">System</Link>
            <Link to='/about' className='  font-semibold  hover:border-b-2 border-black text-gray-500 hover:text-black pb-[0.4rem] ' href="">About</Link>
        </ul>
      </div>

    {/* Botton Container */}
      <div className="flex space-x-3">
       <Link to='/login'  className=' bg-[#EA3C3C] text-white py-2 px-7 rounded-md text-[1rem]  font-semibold  '>Login</Link>
       <Link to='/signup' className=' bg-[#EA3C3C] text-white py-2 px-7 rounded-md text-[1rem]  font-semibold  '>SignUp</Link>
      </div>
    </div>
  )
}

export default Header
