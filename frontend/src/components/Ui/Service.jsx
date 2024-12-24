import React from 'react'
import pymentimg from'../assets/pyment.png'
import register_img from'../assets/register.png'
import storage_img from'../assets/storage.png'
const Service = () => {
  return (
    <div className=' bg-gray-50   pb-[7rem] mt-[4rem] pt-[2rem] '>
          <h1 className=' text-center text-[2.3rem] font-bold '>Our Ser
          <span className='text-[#EA3C3C]'>vice</span></h1>

          {/* Cards Container */}

      <div className=" flex justify-center space-x-5 mt-[3rem] ">

      {/* Start card one */}

      <div className=" w-[350px] h-[320px] bg-white  shadow-lg
      rounded-md border-b-2 border-red-500 pt-[1rem] space-y-4 ">
      <img className=' w-[100px] h-[100px] mx-auto ' src={register_img} alt="" />
        <h1 className=' text-center text-[1.5rem] font-semibold '>Vehicle Registration System</h1>
        <p className=' text-center text-gray-500 px-4'>Simplify the process of registering your vehicle or renewing your registration online. Fast, secure, and hassle-free!</p>
    
      </div>
       {/* End card two */}

        {/* Start card two */}

      <div className=" w-[350px] h-[320px] bg-white  shadow-lg
      rounded-md border-b-2 border-red-500 pt-[1rem] space-y-2 ">
      <img className=' w-[100px] h-[100px] mx-auto ' src={storage_img} alt="" />
        <h1 className=' text-center text-[1.5rem] font-semibold '>Document Management Storage</h1>
        <p className=' text-center text-gray-500'>Digitally store and access your vehicle’s important documents like registration
             papers, insurance, and inspection reports.</p>
    
      </div>
       {/* End card two */}

        {/* Start card three */}

      <div className=" w-[350px] h-[320px] bg-white  shadow-lg
      rounded-md border-b-2 border-red-500 pt-[1rem] space-y-4 ">
      <img className=' w-[100px] h-[100px] mx-auto ' src={pymentimg} alt="" />
        <h1 className=' text-center text-[1.5rem] font-semibold '>Payment Gateway Integration</h1>
        <p className=' text-center text-gray-500'>Make payments for your registration, taxes, and fines securely with integrated payment options 
            including credit cards, PayPal, and online </p>
    
      </div>
       {/* End card three */}

     

    

      </div>
      {/* Cards Container */}
      
    </div>
  )
}

export default Service
