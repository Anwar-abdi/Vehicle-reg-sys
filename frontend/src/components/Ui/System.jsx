import React from 'react'
import login_img from'../assets/key.png'
import signup_img from'../assets/signup.png'
import edit_img from'../assets/edit.png'
const System = () => {
  return (
    <div  className='mt-[2rem] space-y-5  py-[4rem] '>
         
       <h1 className=' text-center text-[2.3rem] font-bold '>How It
       <span className='text-[#EA3C3C]'>  Works</span></h1>
       
       
      <div className=" flex  justify-evenly space-x-3 pt-[4rem] ">

  {/* Single Card 1 */}
       <div className=" space-y-6">
       <img className=' w-[100px] ' src={signup_img} />
       <div className=" flex items-center space-x-3">
            
            <div className="w-[40px] h-[40px] rounded-[50%] text-white bg-red-500 ">
                <h1 className=' text-center pt-2 font-bold'>1</h1>
            </div>

            <h1 className=' text-[1.5rem] font-normal '>SignUp</h1>
        </div>
       </div>
         {/* Single Card 1 */}


  {/* Single Card2 */}
       <div className="space-y-6">
       <img className=' w-[100px] ' src={login_img} />
       <div className=" flex items-center space-x-3">
            
            <div className="w-[40px] h-[40px] rounded-[50%] text-white bg-red-500 ">
                <h1 className=' text-center pt-2 font-bold'>2</h1>
            </div>

            <h1 className=' text-[1.5rem] font-normal '>LogIn</h1>
        </div>
       </div>
         {/* Single Card 2 */}
     






     {/* ///////////////////// */}
  {/* Single Card 3 */}
     <div className="space-y-6">
       <img className=' w-[100px] ' src={edit_img} />
       <div className=" flex items-center space-x-3">
            
            <div className="w-[40px] h-[40px] rounded-[50%] text-white bg-red-500 ">
                <h1 className=' text-center pt-2 font-bold'>3</h1>
            </div>

            <h1 className=' text-[1.5rem] font-normal '>Vehicle Register</h1>
        </div>
       </div>
       {/* Single Card 3 */}
      </div>
    </div>
  )
}

export default System
