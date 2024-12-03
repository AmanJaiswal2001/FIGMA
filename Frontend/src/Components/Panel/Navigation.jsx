import React, {useState} from 'react'


const Navigation = () => 
{

  const handleMenuToggle = () => 
  {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ExploreDropdown = () => 
  {
    setIsExploreOpen(!isExploreOpen);
    setIsHobbiesOpen(false);
  };
  const [isExploreOpen, setIsExploreOpen] = useState(false);

  const HobbiesDropdown = () => 
  {
    setIsHobbiesOpen(!isHobbiesOpen);
    setIsExploreOpen(false);
  };
  const [isHobbiesOpen, setIsHobbiesOpen] = useState(false);
  
  return (
    <div id="main"
    className='w-screen h-screen'>

      <div 
      id="nav"
      className='w-screen h-[48px] sm:w-screen sm:h-[80px] flex sm:justify-between items-center sm:px-20 px-5 justify-between shadow-md'>

        {/* <div className='flex items-center gap-5'> */}

        <div 
        id="logo"
        className='w-[156.4px] h-[32px] sm:w-[293.26px] sm:h-[60px] mr-20 sm:mr-5 box-border'>
          <img 
          src="/public/images/Logo.png" alt="Logo" />
        </div>

        <div 
        id="search"
        className='sm:w-[300px] sm:h-[40px] flex justify-between sm:mr-24'>

          <input 
          className='sm:w-[300px] sm:h-[40px] border-1 border-black pl-2 flex-grow sm:rounded-tl-lg sm:rounded-bl-lg bg-[#F8F9FA] text-sm hidden md:block font-poppins'
          type="text" 
          placeholder='Search here..'/>

          <div
          className='sm:w-[40px] sm:h-[40px] sm:bg-[#8064A2] flex justify-center items-center sm:rounded-tr-lg sm:rounded-br-lg'>
            
            <button>
              <img 
              className='sm:w-[16px] sm:h-[16px] hidden md:block w-full'
              src="/public/images/Search.png" 
              alt="Search Icon" />
            </button>

            <button>
              <img 
              className='md:w-[40px] md:h-[40px] block sm:hidden'
              src="/public/images/Search-cell.png" 
              alt="Cell Search" />
            </button>
            
          </div>

        </div>

        {/* </div> */}

        <div 
        className='sm:w-[525px] sm:h-[40px] flex justify-between items-center sm:gap-7'
        id="misc">

          <div 
          id="explore"
          className='sm:w-[107px] sm:h-[24px] justify-between items-center hidden md:block'>
            <button onClick={ExploreDropdown}
            className='flex items-center'>
              <img 
              className='sm:w-[20px] sm:h-[20px]'
              src="/public/images/explore.png" 
              alt="Explore Icon" />
                <p className='font-medium font-poppins text-sm'>Explore</p>
              <img 
              className='w-[24px] h-[24px]'
              src="/public/images/down.png" alt="" />
            </button>

            {isExploreOpen && (
              <div className="absolute top-20 sm:w-[220px] sm:h-[210px] bg-white border z-10">
                <ul className="font-poppins text-sm text-[#6D747A]">
                  <li className="px-4 py-2 hover:bg-gray-200 sm:w-[220px] sm:h-[42px] border-b-[1px]">People - Community</li>
                  <li className="px-4 py-2 hover:bg-gray-200 sm:w-[220px] sm:h-[42px] border-b-[1px]">Places - Venues</li>
                  <li className="px-4 py-2 hover:bg-gray-200 sm:w-[220px] sm:h-[42px] border-b-[1px]">Programs - Events</li>
                  <li className="px-4 py-2 hover:bg-gray-200 sm:w-[220px] sm:h-[42px] border-b-[1px]">Products - Store</li>
                  <li className="px-4 py-2 hover:bg-gray-200 sm:w-[220px] sm:h-[42px] border-b-[1px]">Blogs</li>
                </ul>
              </div>
            )}

          </div>

          <div 
          id="hobbies"
          className='sm:w-[107px] sm:h-[24px] justify-between items-center hidden md:block'>
            
            <button onClick={HobbiesDropdown}
            className='flex items-center'>
            <img 
            className='sm:w-[20px] sm:h-[20px]'
            src="/public/images/hobbies.png" 
            alt="Hobbies Icon" />
              <p className='font-medium font-poppins text-sm'>Hobbies</p>
              <img 
              className='w-[24px] h-[24px]'
              src="/public/images/down.png" alt="" />
            </button>
          
            {isHobbiesOpen && (
              <div className="absolute top-20 sm:w-[220px] sm:h-[210px] bg-white border z-10">
              <ul className="font-poppins text-sm text-[#6D747A]">
                <li className="px-4 py-2 hover:bg-gray-200 sm:w-[220px] sm:h-[42px] border-b-[1px]">List</li>
                <li className="px-4 py-2 hover:bg-gray-200 sm:w-[220px] sm:h-[42px] border-b-[1px]">All</li>
                <li className="px-4 py-2 hover:bg-gray-200 sm:w-[220px] sm:h-[42px] border-b-[1px]">Your</li>
                <li className="px-4 py-2 hover:bg-gray-200 sm:w-[220px] sm:h-[42px] border-b-[1px]">Hobbies</li>
                <li className="px-4 py-2 hover:bg-gray-200 sm:w-[220px] sm:h-[42px] border-b-[1px]">Here :) </li>
              </ul>
            </div>
            )}

          </div>

          <button 
          id="save"
          className='hidden md:block'>
            <img 
            src="/public/images/save.png" 
            alt="Save Icon" />
          </button>

          <button 
          className=''
          id="bell">
            <img  
            src="/public/images/bell.png" 
            alt="Bell Icon" />
          </button>

          <button 
          className='hidden md:block'
          id="cart">
            <img 
            src="/public/images/cart.png" 
            alt="Cart Icon" />
          </button>

          <button 
          id='signin'
          className='sm:w-[112px] sm:h-[40px] border-[1px] border-[#8064A2] rounded-lg text-sm font-semibold text-[#8064A2] font-poppins hidden md:block sm:px-4'>
            Sign In
          </button>

        </div>

        <button
        className='block sm:hidden'
        onClick={handleMenuToggle}>
          <img src="/public/images/menu.png" alt="" />
        </button>

      </div>

    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} z-50 backdrop-blur p-4 fixed top-[5vh] w-full h-[100vh]  font-poppins`}>

      <button className='flex text-sm mb-3'>
        <img 
          src="/public/images/explore.png" 
          alt="Explore Icon" />
            Explore
      </button>

      <button className='flex text-sm mb-3'>
        <img 
          src="/public/images/hobbies.png" 
          alt="Hobbies Icon" />
            Hobbies
      </button>

      <button className='flex text-sm mb-3 '>
      <img 
          src="/public/images/save.png" 
          alt="Hobbies Icon" />
            Save
      </button>

      <button className='flex text-sm mb-3 '>
      <img 
          src="/public/images/bell.png" 
          alt="Hobbies Icon" />
            Notification(s)
      </button>

      <button className='flex text-sm mb-3 '>
      <img 
          src="/public/images/cart.png" 
          alt="Hobbies Icon" />
            Cart
      </button>

      <button className='flex text-sm'>Sign In/Register</button>
    </div>

    </div>
  )
}

export default Navigation