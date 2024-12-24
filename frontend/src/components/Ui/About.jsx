import React from 'react'
import car_imgs from'../assets/carimgs.png'
const About = () => {
  return (
    <div className=' mt-[5rem] py-[4rem] '>

<h1 className=' text-center text-[2.3rem] font-bold '>About
<span className='text-[#EA3C3C]'>  Us</span></h1>
        
        <div className="flex justify-between mx-[5rem] space-x-8 mt-[4rem] ">

        <div className=" ">
        <img className='w-[100vw] h-[400px] ' src={car_imgs}/>
      </div>
      
      <div className=" space-y-8 mt-[3rem]  ">
        <h1 className=' text-[2.3rem] font-bold'>Driving Innovation, <br /> Delivering Excellence</h1>
        <p>we are committed to transforming the way people experience vehicles. With a passion
             for innovation and a focus on customer satisfaction, we provide seamless 
             services tailored to your needs. From vehicle registration and compliance to
              helping you find the perfect car, our mission is to simplify the process and deliver 
            excellence every step of the way.</p>
            <button className=' py-2 px-7 border-2 border-black 
            rounded-md hover:bg-red-500 hover:border-none hover:text-white'>Read More</button>
      </div>

        </div>
      
     
    </div>
  )
}

export default About
