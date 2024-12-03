import React from 'react'
import arrow from "../../assets/arrow.png"
import Group from "../../assets/Group 99.png"
const Section = () => {
 
 
 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
 
  return (


    
    <>
    <div className='md:w-full w-screen h-64 bg-sky-100 md:h-[662px] absolute mt-20'>
<div className='flex justify-around mt-10 ml-5 md:mt-32 md:-ml-12'>
<div className='md:w-[565px] md:h-14 w-72 h-7'>
   <p className='font-poppins md:text-4xl text-[18px] leading-7'>Your <span className='font-poppins md:text-4xl text-[18px] leading-7 text-purple-800'>Hobby</span> , Your  <span className=' text-emerald-600 font-poppins md:text-4xl text-[18px] leading-7'>Community...</span> </p>
   
    {/* text */}

<div className='md:w-36 md:h-11 w-28 h-7  bg-purple-800  flex justify-center rounded-lg mt-4 md:mt-8'>
    <button className='md:text-xl font-poppins md:font-semibold text-center text-sm text-white'>Get started</button>
    {/* button */}
</div>
</div>

 


<div>
    {/* button */}
</div>
</div>
    </div>
    <div className='md:w-full w-80 m-auto'>
    <img src={Group}

className='relative md:top-80 top-40 md:m-auto   '
/>
</div>
    <div className='bg-gray-100 w-10 p-3 h-10 md:flex flex-col absolute hidden  right-32 rounded-full -mt-20' >
 <button onClick={scrollToTop}>
  <img className=' '
  src={arrow}/>
<div className='bg-gray-100 w-56 h-5 text-center relative right-24 mt-4  p-4 flex items-center justify-center'>
 <p className='text-purple-600 font-medium  font-poppins text-sm'>Go to top (Ctrl+Home)</p>

</div>
</button>
 </div>


    
    </>
  )
}

export default Section