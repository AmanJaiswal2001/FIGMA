import React, { useState } from 'react';
import quote from './Images/Vector.png';
import profileImage from './Images/Ellipse_12.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Testimonials() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = React.useRef(null);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <>
            <div className="flex flex-col gap-y-6 md:gap-y-10 md:p-10 w-[312px] md:w-[1240px] h-[612px] md:h-[472px] bg-[#F7F5F9] mx-auto mt-7 md:mt-20 rounded-md p-4">
                <div className="flex flex-wrap items-center justify-center md:items-start md:justify-start gap-4 md:gap-4 md:gap-x-8">
                    <a href="#" className="text-3xl md:text-4xl">
                        <img src={quote} alt="quote icon" />
                    </a>
                    <p className="font-poppins text-[18px] md:text-[24px] font-semibold mt-1 text-center md:text-left">
                        Testimonials
                    </p>
                </div>

                <p className="font-poppins text-[#6D747A] text-[12px] md:text-lg font-light text-center md:text-left md:leading-7">
                    In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                </p>


                <div className='md:hidden block'>
                    <div className="w-[236px] md:[60px] flex flex-wrap gap-5">
                        <img src={profileImage} alt="Profile" className="w-[60px] h-[60px] object-cover ml-2" />
                        <div className='md:mt-5'>
                            <p className='text-[16px] text-[#6D747A] font-semibold	'>Shubha Nagarajan</p>
                            <p className="text-[12px] text-[#6D747A]">Classical Dancer</p>
                        </div>
                    </div>
                </div>


                <div className='flex flex-wrap md:gap-20'>
                    <div className="flex items-center w-[264px] md:w-[776px] h-[64px] md:h-[100px] bg-[#E3DFF2] rounded-lg p-4 shadow-md md:gap-4">
                        <button className="w-[24px] h-[24px] md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm" onClick={togglePlayPause}>
                            <i className={`fa ${isPlaying ? 'fa-pause' : 'fa-play'} text-slate-600`} />
                        </button>

                        <div className="flex-1 relative ml-2">
                            <input type="range" className="w-[123px]  md:w-[560px] h-[2px] bg-[#D1C4E9] rounded-full" />
                            <span className="absolute transform -translate-y-[50%] text-[8px] md:text-[12px] mt-4 ml-2 text-purple-500">
                                0:00
                            </span>
                        </div>
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg relative z-0">
                            <i className="fa-solid fa-microphone absolute mt-7 md:mt-9 text-white"></i>
                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <audio ref={audioRef}>
                        <source src="your-audio-file.mp3" type="audio/mp3" />
                    </audio>

                    <div className='hidden md:block'>
                        <div className="md:w-[304px] md:[100px] flex flex-wrap md:gap-10">
                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover md:w-[100px] md:[100px]" />
                            <div className='md:mt-5'>
                                <p className='text-lg text-[#6D747A] font-semibold	'>Shubha Nagarajan</p>
                                <p className="text-m[14px] text-[#6D747A]">Classical Dancer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
