import React, { useState } from 'react'
import Face from "../../assets/face.png"
import Face1 from "../../assets/twit.png"
import Face2 from "../../assets/inst.png"
import Face3 from "../../assets/pin.png"
import Face4 from "../../assets/gmail.png"
import Face5 from "../../assets/youtube.png"
import Face6 from "../../assets/tel.png"
import Face7 from "../../assets/mail.png"
const Footer = () => {
  
  const [isOpen,setisOpen]=useState(
    
    {
      hobbycue: true,
  howDoI: true,
  quickLinks: true,
    }
    
  )

  const toggleSection = (section) => {
    setisOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
  
  return (
    <>
    <div className='md:mt-96 mt-40 md:w-full w-screen '>   
     <div className='  md:w-full w-screen h-[796px] md:h-96 md:flex md:justify-between  md:p-20 p-8 gap-5'>
  <div className='  flex   md:w-1/4   justify-between p-2'>
    <div className='font-poppins '>
     <p className='font-bold text-sm'>Hobbycue</p> {/* hboo */}
   
   {isOpen.hobbycue && (  <ul className='pt-4 flex flex-col    md:gap-1    gap-4 md:text-black text-gray-400'>
     <li  className='font-normal text-sm'>About Us</li>

      <li  className='font-normal text-sm'>Our Service</li>
      <li className='font-normal text-sm'>Work with Us</li>
      <li className='font-normal text-sm'>FAQ</li>
      <li className='font-normal text-sm'>Contact Us</li>
     </ul>)}
     </div>
     <span className='cursor-pointer md:hidden'>
  <i 
  onClick={()=>toggleSection("hobbycue")}
  className={`fa-solid ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
   {/* <i class="fa-solid fa-angle-down"></i> */}
   </span>
    </div>
   



    <div className='flex   md:w-1/4 justify-between p-2'>
    <div className='font-poppins '>
     <p className='font-bold text-sm'>How Do I</p> {/* hboo */}
   {isOpen.howDoI &&(
     <ul className='pt-4 flex flex-col  md:gap-1    gap-4 md:text-black text-gray-400'>
     <li  className='font-normal text-sm'>Sign Up</li>

      <li  className='font-normal text-sm'>Add a Listing</li>
      <li className='font-normal text-sm'>Claim Listing</li>
      <li className='font-normal text-sm'>Post a Query</li>
      <li className='font-normal text-sm'>Add a Blog Post</li>
      <li className='font-normal text-sm'>Other Queries</li>
     </ul>)}
     </div>
     <span 
    
     className='cursor-pointer md:hidden'>
  <i
   onClick={()=>toggleSection("howDoI")}
   className={`fa-solid ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
   {/* <i class="fa-solid fa-angle-down"></i> */}
   </span>
    </div>
    <div className='flex   md:w-1/4 justify-between p-2'>
    <div className='font-poppins '>
     <p className='font-bold text-sm'>Quick Links</p> {/* hboo */}
   {isOpen.quickLinks&&(
     <ul className='pt-4 flex flex-col  md:gap-1    gap-4 md:text-black text-gray-400'>
     <li  className='font-normal text-sm'>Listings</li>

      <li  className='font-normal text-sm'>Blog Posts</li>
      <li className='font-normal text-sm'>Work with Us</li>
      <li className='font-normal text-sm'>Shop/Store</li>
      <li className='font-normal text-sm'>Community</li>
     </ul>)}
     </div>
     <span className='cursor-pointer md:hidden'>
  <i 
  onClick={()=>toggleSection("quickLinks")}
  className={`fa-solid ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
   {/* <i class="fa-solid fa-angle-down"></i> */}
   </span>
    </div>
   
    <div className='font-poppins md:w-1/4  p-2'>
     <p className='font-bold text-sm'>Social Media</p> {/* hboo */}
   
   <div className='flex w-[340px] md:gap-2 gap-1  pt-4 -ml-4 md:-ml-0'>    
    <a href='/#'>
     <img className='w-8 cursor-pointer'
      src={Face}></img></a>
 <a href='/#'>
     <img className='w-8 cursor-pointer'
      src={Face1}></img></a>
      <a href='/#'>
     <img className='w-8 cursor-pointer'
      src={Face2}></img></a>
      <a href='/#'>
     <img className='w-8 cursor-pointer'
      src={Face3}></img></a>
      <a href='/#'>
     <img className='w-8 cursor-pointer'
      src={Face4}></img></a>
      <a href='/#'>
     <img className='w-8 cursor-pointer'
      src={Face5}></img></a>
      <a href='/#'>
     <img className='w-8 cursor-pointer'
      src={Face6}></img></a>
  <a href='/#'>
     <img className='w-8 cursor-pointer'
      src={Face5}></img></a>
  <a href='/#'>
     <img className='w-8 cursor-pointer'
      src={Face7}></img></a>

       </div>


<div className='md:mt-16 mt-5' >
       <p className='font-bold text-sm font-poppins'>Invite Friends</p> {/* hboo */}
<div className=' w-60 flex mt-6'>
<input type='text'
className='border border-violet-900 p-2 md:p-4 w-60 rounded-l-lg outline-none'
  placeholder='Email ID'
/>
<button className='bg-violet-950 text-white text-center p-2 md:p-4  rounded-r-lg'>Invite</button>
</div>
</div>
     </div>


</div>

     <p className='font-normal  text-sm font-poppins mt-40 md:mt-0  bg-violet-100 p-4 text-center'>© Purple Cues Private Limited</p> {/* hboo */}

    </div>
   

{/* mobile design */}








</>
  )
}

export default Footer