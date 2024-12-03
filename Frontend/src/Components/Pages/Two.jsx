import React from 'react'

const Two = () => {
  return (
    
    <div id="main" className='w-full h-screen overflow-x-hidden flex  items-center justify-center mt-32 md:mt-0'>

        <div 
        id="cards"
        className='grid sm:grid-cols-2 gap-4 p-4 sm:w-full  sm:justify-around'>

          <div 
          id="one"
          className='sm:w-[608px] sm:h-[297px] rounded-lg border-[1px] flex flex-col sm:p-10 font-poppins w-[312px] h-[216px] p-5 text-center items-center sm:items-start sm:text-start border-gray-400 hover:bg-[#8064A2] hover:text-white group relative '>

            <div
            className='sm:w-[147px] sm:h-[40px] flex justify-between my-auto w-[102px] h-[32px]'>
              <img 
              className='group-hover:opacity-0 hover:hidden sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]'
              src="/public/images/people.png" 
              alt="People"/>
              <img 
              className='absolute opacity-0 group-hover:opacity-100 sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]'
              src="/public/images/peoplew.png"/>
              <span className='sm:text-2xl font-semibold text-[18px] text-[#8064A2] group-hover:text-white'>People</span>
            </div>

            <div
            className='sm:w-[520px] sm:h-[81px] w-[264px] h-[80px] my-auto'>
              <span className='sm:text-[18px] font-light text-xs'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</span>
            </div>

            <button
            className='sm:w-[122px] sm:h-[40px] border-[1px] text-[14px] font-semibold my-auto rounded-lg text-xs w-[264px] h-[32px] border-[#8064A2] text-[#8064A2] mt-5 group-hover:text-white group-hover:border-white'>
              Connect
            </button>

          </div>

          <div 
          id="two"
          className='sm:w-[608px] sm:h-[297px] rounded-lg border-[1px]  flex flex-col sm:p-10 font-poppins w-[312px] h-[216px] p-5 text-center items-center sm:items-start sm:text-start border-gray-400 hover:bg-[#77933C] hover:text-white group relative'>

            <div
            className='sm:w-[131px] sm:h-[40px] flex justify-between my-auto items-center w-[91px] h-[32px]'>
              <img 
              className='group-hover:opacity-0 hover:hidden sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]'
              src="/public/images/place.png" 
              alt="Place"/>
              <img 
              className='absolute opacity-0 group-hover:opacity-100 sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]'
              src="/public/images/placew.png"/>
              <span className='sm:text-2xl font-semibold text-[18px] text-[#8064A2] group-hover:text-white'>Place</span>
            </div>

            <div
            className='sm:w-[520px] sm:h-[81px] w-[264px] h-[80px] my-auto'>
              <span className='sm:text-[18px] font-light text-xs'>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</span>
            </div>

            <button
            className='sm:w-[122px] sm:h-[40px] border-[1px] text-[14px] font-semibold my-auto rounded-lg text-xs w-[264px] h-[32px] border-[#8064A2] text-[#8064A2] mt-5 group-hover:text-white group-hover:border-white'>
              Meet Up
            </button>

          </div>

          <div 
          id="three"
          className='sm:w-[608px] sm:h-[297px] rounded-lg border-[1px]  flex flex-col sm:p-10 font-poppins w-[312px] h-[216px] p-5 text-center items-center sm:items-start sm:text-start border-gray-400 hover:bg-[#C0504D] hover:text-white group relative'>

            <div
            className='sm:w-[160px] sm:h-[40px] flex justify-between my-auto items-center w-[112px] h-[32px]'>
             <img 
              className='group-hover:opacity-0 hover:hidden sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]'
              src="/public/images/product.png" 
              alt="Product"/>
              <img 
              className='absolute opacity-0 group-hover:opacity-100 sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]'
              src="/public/images/productw.png"/>
              <span className='sm:text-2xl font-semibold text-[18px] text-[#8064A2] group-hover:text-white'>Product</span>
            </div>

            <div
            className='sm:w-[520px] sm:h-[81px] w-[264px] h-[80px] my-auto'>
              <span className='sm:text-[18px] font-light text-xs'>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</span>
            </div>

            <button
            className='sm:w-[122px] sm:h-[40px] border-[1px] text-[14px] font-semibold my-auto rounded-lg text-xs w-[264px] h-[32px] border-[#8064A2] text-[#8064A2] mt-3 group-hover:text-white group-hover:border-white'>
              Get It
            </button>

          </div>

        
          <div 
          id="four"
          className='sm:w-[608px] sm:h-[297px] rounded-lg border-[1px] border-gray-400 flex flex-col sm:p-10 font-poppins w-[312px] h-[216px] p-5 text-center items-center sm:items-start sm:text-start hover:bg-[#0096C8] hover:text-white group relative'>

            <div
            className='sm:w-[171px] sm:h-[40px] flex justify-between my-auto items-center w-[121px] h-[32px]'>
              <img 
              className='group-hover:opacity-0 hover:hidden sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]'
              src="/public/images/program.png" 
              alt="Program"/>
              <img 
              className='absolute opacity-0 group-hover:opacity-100 sm:w-[40px] sm:h-[40px] w-[32px] h-[32px]'
              src="/public/images/programw.png"/>
              <span className='sm:text-2xl font-semibold text-[18px] text-[#8064A2] group-hover:text-white'>Program</span>
            </div>

            <div
            className='sm:w-[520px] sm:h-[81px] w-[264px] h-[80px] my-auto'>
              <span className='sm:text-[18px] font-light text-xs'>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</span>
            </div>

            <button
            className='sm:w-[122px] sm:h-[40px] border-[1px] text-[14px] font-semibold my-auto rounded-lg text-xs w-[264px] h-[32px] border-[#8064A2] text-[#8064A2] group-hover:text-white group-hover:border-white'>
              Attend
            </button>

          </div>

      </div>

    </div>

  )
}

export default Two
