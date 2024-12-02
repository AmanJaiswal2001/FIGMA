import React from 'react'

const Two = () => 
{
  return (
    
    <div id="main" className='w-full h-screen overflow-x-hidden'>

      <div id="cards" className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:p-4 px-1 max-w-full mx-auto p-5'>

        <div id="one" className='w-full h-[216px] sm:w-[608px] sm:h-[297px] rounded-lg border-[1px] border-black flex flex-col sm:p-10 font-poppins p-5 text-center items-center sm:items-start sm:text-start'>

          <div className='sm:w-[147px] sm:h-[40px] flex justify-between my-auto w-[102px] h-[32px]'>
            <img src="/public/images/people.png" alt="People" />
            <span className='sm:text-2xl font-semibold text-[18px] text-[#8064A2]'>People</span>
          </div>
          
          <div className='sm:w-[520px] sm:h-[81px] w-[264px] h-[80px] my-auto'>
            <span className='sm:text-[18px] font-light text-xs'>
              Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist, or collaborator.
            </span>
          </div>
          
          <button className='sm:w-[122px] sm:h-[40px] border-[1px] text-[14px] font-semibold my-auto rounded-lg text-xs w-[264px] h-[32px] border-[#8064A2]'>
            Connect
          </button>
        
        </div>


        <div id="two" className='w-full sm:w-[608px] sm:h-[297px] rounded-lg border-[1px] border-black flex flex-col sm:p-10 font-poppins p-5 text-center items-center sm:items-start sm:text-start'>
          
          <div className='sm:w-[147px] sm:h-[40px] flex justify-between my-auto items-center w-[91px] h-[32px]'>
            <img src="/public/images/place.png" alt="Place" />
            <span className='sm:text-2xl font-semibold text-[18px] text-[#8064A2]'>Place</span>
          </div>
          
          <div className='sm:w-[520px] sm:h-[81px] w-[264px] h-[80px] my-auto'>
            <span className='sm:text-[18px] font-light text-xs'>
              Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through hobbycue.
            </span>
          </div>
         
          <button className='sm:w-[122px] sm:h-[40px] border-[1px] text-[14px] font-semibold my-auto rounded-lg text-xs w-[264px] h-[32px] border-[#8064A2]'>
            Meet Up
          </button>
        
        </div>

        <div id="three" className='w-full sm:w-[608px] sm:h-[297px] rounded-lg border-[1px] border-black flex flex-col sm:p-10 font-poppins p-5 text-center items-center sm:items-start sm:text-start'>
          
          <div className='sm:w-[147px] sm:h-[40px] flex justify-between my-auto items-center w-[91px] h-[32px]'>
            <img src="/public/images/product.png" alt="Product" />
            <span className='sm:text-2xl font-semibold text-[18px] text-[#8064A2]'>Product</span>
          </div>
          
          <div className='sm:w-[520px] sm:h-[81px] w-[264px] h-[80px] my-auto'>
            <span className='sm:text-[18px] font-light text-xs'>
              Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores, or from community members.
            </span>
          </div>
          
          <button className='sm:w-[122px] sm:h-[40px] border-[1px] text-[14px] font-semibold my-auto rounded-lg text-xs w-[264px] h-[32px] border-[#8064A2]'>
            Get It
          </button>
       
        </div>

        <div id="four" className='w-full sm:w-[608px] sm:h-[297px] rounded-lg border-[1px] border-black flex flex-col sm:p-10 font-poppins p-5 text-center items-center sm:items-start sm:text-start'>
          
          <div className='sm:w-[171px] sm:h-[40px] flex justify-between my-auto items-center w-[91px] h-[32px]'>
            <img src="/public/images/program.png" alt="Program" />
            <span className='sm:text-2xl font-semibold text-[18px] text-[#8064A2]'>Program</span>
          </div>
          
          <div className='sm:w-[520px] sm:h-[81px] w-[264px] h-[80px] my-auto'>
            <span className='sm:text-[18px] font-light text-xs'>
              Find events, meetups, and workshops related to your hobby. Register or buy tickets online.
            </span>
          </div>
          
          <button className='sm:w-[122px] sm:h-[40px] border-[1px] text-[14px] font-semibold my-auto rounded-lg text-xs w-[264px] h-[32px] border-[#8064A2]'>
            Attend
          </button>
        
        </div>

      </div>
    
    </div>
  );
};

export default Two;
