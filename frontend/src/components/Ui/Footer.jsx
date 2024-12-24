import React from 'react'

const Footer = () => {
  return (
    <div className=' flex justify-between px-[4rem] items-center bg-black py-[2rem] mt-[4rem]  '>
       {/* Container one */}
      <div className="">
       <h1 className=' text-[1.5rem] text-[#EA3C3C] font-semibold font-Poppins '>CarLink</h1>


      </div>

         {/* Container two */}

      <div className="">
      <ul className=' flex space-x-5 '>
            <li><a className='  font-semibold  hover:border-b-2 border-white py-2 text-white  ' href="">Home</a></li>
            <li><a className=' font-semibold  hover:border-b-2 border-white py-2  text-white  ' href="">About</a></li>
            <li><a className='  font-semibold hover:border-b-2 border-white py-2  text-white   ' href="">Vehicle Register</a></li>
            <li><a className='  font-semibold  hover:border-b-2 border-white py-2 text-white ' href="">Categories</a></li>
        </ul>
      </div>

         {/* Container three */}

      <div className="">
          
          <h1 className=' text-white'>(456) 789-12301</h1>
          <p className=' text-white'>info@modrino.co.uk</p>
          <p className=' text-white'>South 13th street <br /> New york America</p>

      </div>
    </div>
  )
}

export default Footer
