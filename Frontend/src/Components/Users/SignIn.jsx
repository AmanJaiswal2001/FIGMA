import React, { useState } from 'react';
import GPimg from './Images/Group_27.png';
import googleIcon from './Images/google.png'
import FBIcon from './Images/FB.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';

export default function SignIn() {
  const [view, setView] = useState('signIn');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='p-7 w-full md:h-[630px] lg:h-[678] h-[720px] flex flex-wrap gap-[32px] items-center justify-center'>
      {/* Text and image div */}
      <div className='md:w-[707px] md:h-[533px] bg-white'>
        <p className='text-start text-[18px] sm:text-[25px] md:text-[32px] font-poppins font-semibold italic sm:italic md:italic lg:italic'>
          Explore your <span className='text-blue-400'>hobby</span> or <span className="text-blue-400">passion</span>
        </p>

        <p className='font-poppins font-light text-sm leading-[30px] mt-3 block md:hidden'>
          Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.
        </p>

        <p className='font-poppins hidden md:block font-light text-[12px] md:text-[13px] sm:text-[12px] lg:text-sm14px leading-[30px] mt-5 md:mt-7'>
          Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
        </p>

        <p className='font-poppins hidden md:block font-light text-sm leading-[30px] md:mt-3'>
          If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
        </p>

        <img src={GPimg} alt="Login Group Image" className='md:mt-12 hidden md:block' />
      </div>



      <div className='bg-white md:w-[410px] md:h-[533px] p-6 flex flex-col'>
        {/* SignIn and JoiIn Div */}
        <div className='flex gap-4 mb-6 justify-center md:justify-start'>
          <button onClick={() => setView('signIn')} className={`font-poppins text-sm font-semibold ${view === 'signIn' ? 'underline text-[#8064A2]' : 'no-underline text-[#939CA3]'}`}>
            Sign In
          </button>
          <button onClick={() => setView('joinIn')} className={`px-6 py-2 font-poppins text-sm font-semibold ${view === 'joinIn' ? 'underline text-[#8064A2]' : 'no-underline text-[#939CA3]'}`}>
            Join In
          </button>
        </div>

        {view === 'signIn' ? (
          <div>
            <div className='hidden md:block'>
              <div className='flex flex-col gap-4'>
                {/* SignIn With Google Button */}
                <a href="#" className='flex flex-wrap border rounded gap-[30px] md:gap-[70px] top-3 right-32 py-1 md:py-3 px-5 bg-[#F7F5F9] hover:bg-[#ded9e2] md:h-[40px] md:w-[350px]'>
                  <img src={googleIcon} alt="Google Icon" className='md:w-[16px] md:h-[16px] size-3' />
                  <p className="font-poppins text-[12px] md:text-[14px] font-semibold leading-4">Continue with Google</p>
                </a>

                {/* SignIn with Facebook Button */}
                <a href="#" className='flex flex-wrap border rounded gap-[30px] md:gap-[70px] top-3 right-32 py-1 md:py-3 px-5 bg-[#F7F5F9] hover:bg-[#ded9e2] md:h-[40px] md:w-[350px]'>
                  <img src={FBIcon} alt="Google Icon" className='md:w-[16px] md:h-[16px] size-3' />
                  <p className="font-poppins font-semibold leading-4 text-[12px] md:text-[14px]">Continue with Google</p>
                </a>

                <div className='flex items-center justify-center gap-2 w-full'>
                  <hr className='flex-1 border-t border-[#CED4DA] font-bold' />
                  <p className='text-sm'>Or connect with</p>
                  <hr className='flex-1 border-t border-[#CED4DA] font-bold' />
                </div>


                <input type='email' placeholder='Email' className='p-2 border rounded' />
                <div className='relative w-full'>
                  <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='w-full p-2 border border-gray-300 rounded' />
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer' />
                </div>

                <div className='flex items-center justify-between w-full'>
                  <label className='flex items-center space-x-2'>
                    <input type="checkbox" id="remember" className='h-4 w-4 text-blue-500 border-gray-300 rounded' />
                    <span className='text-sm text-gray-700'>Remember me</span>
                  </label>

                  <div className='flex items-center space-x-2'>
                    <FontAwesomeIcon icon={faLock} className='text-gray-500 size-3' />
                    <a href="#" className='font-poppins text-[12px] hover:underline'>
                      Forgot password?
                    </a>
                  </div>
                </div>
                <button className='px-6 py-2 hover:bg-[#F7F5F9] font-poppins font-bold border border-black rounded'>Continue</button>
              </div>
            </div>


            <div className=' block md:hidden'>
              <div className='flex flex-col gap-4'>
                <input type='email' placeholder='Email' className='p-2 border rounded' />
                <div className='relative w-full'>
                  <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='font-poppins w-full p-2 border border-gray-300 rounded' />
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer' />
                </div>

                <div className='flex items-center justify-between mt-4 flex-wrap gap-2'>
                  {/* Remember Me */}
                  <label className='flex items-center space-x-2'>
                    <input
                      type='checkbox'
                      id='remember'
                      className='h-4 w-4 text-blue-500 border-gray-300 rounded'
                    />
                    <span className='text-[12px] text-gray-700'>Remember me</span>
                  </label>

                  <a href='#' className='font-poppins text-[12px] text-[#939CA3] font-semibold hover:underline flex items-center'>
                    <FontAwesomeIcon icon={faLock} className='mr-1 text-gray-500 text-sm' />
                    Forgot password?
                  </a>
                </div>

                <p className='font-poppins font-light text-[10.8px]'><span className='text-[#939CA3]'>By continuing, you agree to our</span> Terms of Service <span className='text-[#939CA3]'>and</span> Privacy Policy.</p>
                <button className='px-6 py-2 hover:bg-[#F7F5F9] font-poppins font-bold border border-black rounded'>Continue</button>

                {/* SignIn with Google Button */}
                <a href="#" className='flex flex-wrap border rounded gap-[30px] md:gap-[70px] top-3 right-32 py-1 md:py-3 px-5 bg-[#F7F5F9] hover:bg-[#ded9e2] md:h-[40px] md:w-[350px]'>
                  <img src={googleIcon} alt="Google Icon" className='md:w-[16px] md:h-[16px] size-3' />
                  <p className="font-poppins text-[12px] md:text-[14px] font-semibold leading-4">Continue with Google</p>
                </a>

                {/* SignIn with Facebook Button */}
                <a href="#" className='flex flex-wrap border rounded gap-[30px] md:gap-[70px] top-3 right-32 py-1 md:py-3 px-5 bg-[#F7F5F9] hover:bg-[#ded9e2] md:h-[40px] md:w-[350px]'>
                  <img src={FBIcon} alt="Google Icon" className='md:w-[16px] md:h-[16px] size-3' />
                  <p className="font-poppins font-semibold leading-4 text-[12px] md:text-[14px]">Continue with Google</p>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-4'>
            <a href="#" className='flex flex-wrap border rounded gap-[30px] md:gap-[70px] top-3 right-32 py-1 md:py-3 px-5 bg-[#F7F5F9] hover:bg-[#ded9e2] md:h-[40px] md:w-[350px]'>
              <img src={googleIcon} alt="Google Icon" className='md:w-[16px] md:h-[16px] size-3' />
              <p className="font-poppins text-[12px] md:text-[14px] font-semibold leading-4">Continue with Google</p>
            </a>

            {/* SignIn with Facebook Button */}
            <a href="#" className='flex flex-wrap border rounded gap-[30px] md:gap-[70px] top-3 right-32 py-1 md:py-3 px-5 bg-[#F7F5F9] hover:bg-[#ded9e2] md:h-[40px] md:w-[350px]'>
              <img src={FBIcon} alt="Google Icon" className='md:w-[16px] md:h-[16px] size-3' />
              <p className="font-poppins font-semibold leading-4 text-[12px] md:text-[14px]">Continue with Google</p>
            </a>

            <div className='flex items-center justify-center gap-2 w-full'>
              <hr className='flex-1 border-t border-[#CED4DA] font-bold' />
              <p className='font-poppins text-sm'>Or connect with</p>
              <hr className='flex-1 border-t border-[#CED4DA] font-bold' />
            </div>


            <input type='email' placeholder='Email' className='p-2 border rounded' />
            <div className='relative w-full'>
              <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='font-poppins w-full p-2 border border-gray-300 rounded' />
              <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={() => setShowPassword(!showPassword)} className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer' />
            </div>

            <div className='flex items-center justify-end space-x-0'>
              <a href="#" className='font-poppins text-[12px] text-[#939CA3] font-semibold hover:underline'>
                Forgot password?
              </a>
            </div>

            <p className='font-poppins font-light text-[10.8px]'><span className='text-[#939CA3]'>By continuing, you agree to our</span> Terms of Service <span className='text-[#939CA3]'>and</span> Privacy Policy.</p>
            <button className='px-6 py-2 hover:bg-[#F7F5F9] font-poppins font-bold border border-black rounded'>Continue</button>

          </div>
        )}
      </div>




      <img src={GPimg} alt="Login Group Image" className='md:mt-12 block md:hidden' />
    </div>
  );
}
