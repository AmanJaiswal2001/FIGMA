import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function Addcard() {
    return (
        <div className="bg-white w-[320px] md:w-[1240px] h-[236px] md:h-[284px] mx-auto mt-10 md:mt-40 p-4 md:p-10 border rounded-md flex flex-col gap-y-6 md:gap-y-10">
            <div className="flex flex-wrap items-center justify-center md:items-start md:justify-start gap-4 md:gap-4 md:gap-x-8">
                <a href="#" className="text-3xl md:text-4xl">
                    <FontAwesomeIcon icon={faCirclePlus} className="text-purple-400 w-[26.6px] h-[26.6px] md:size-[40px]" />
                </a>
                <p className="font-poppins text-[18px] md:text-2xl font-semibold mt-1">
                    Add your own
                </p>
            </div>

            <p className="font-poppins text-[12px] md:text-lg font-light text-center md:text-left">
                Are you a teacher or expert? Do you sell or rent out equipment, venue, or event tickets? Or, do you know someone who should be on HobbyCue? Go ahead and add your own page.
            </p>

            <div className="flex justify-center md:justify-start">
                <button className="w-full md:w-auto bg-transparent border border-gray-300 py-2 px-6 rounded-lg text-sm md:text-base font-medium hover:bg-slate-300 transition">
                    Add New
                </button>
            </div>

        </div>
    );
}
