import React from 'react'
import arrow from "../../assets/arrow.png"
import Group from "../../assets/Group 99.png"
const Section = () => {
  return (
    <>
    <div className='w-full bg-sky-100 h-[662px] absolute'>
<div className='flex justify-around mt-40'>
<div className='w-[565px] h-14'>
   <p className='font-poppins text-4xl'>Your Hobby, Your Community...</p>
   
    {/* text */}

<div className='w-36 h-11 bg-purple-800  flex justify-center rounded-lg mt-8'>
    <button className='text-xl font-poppins font-semibold text-center text-white'>Get started</button>
    {/* button */}
</div>
</div>

 


<div>
    {/* button */}
</div>
</div>
    </div>
    <img src={Group}

className='relative top-80 m-auto'
/>

    <div className='bg-gray-100 w-10 p-2 h-10 flex flex-col relative left-[80%] bottom-28 rounded-full mt-16' >
  <img className=' '
  src={arrow}/>
<div className='bg-gray-100 w-56 h-5 text-center relative right-24 mt-4  p-4 flex items-center justify-center'>
 <p className='text-purple-600 font-medium  font-poppins text-sm'>Go to top (Ctrl+Home)</p>
</div>
 </div>


    
    </>
  )
}

export default Section