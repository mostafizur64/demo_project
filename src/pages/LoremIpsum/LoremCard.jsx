import React from 'react';
import { IoLocationSharp } from "react-icons/io5";

const LoremCard = ({ item }) => {
    console.log(item)
    return (
        <div className="rounded overflow-hidden shadow-lg w-full">
            <img className="w-full" src={item.image} alt="Card Image" />
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-[24px] mb-2 text-titleColor capitalize">{item.title}</div>
                <div className='flex items-center justify-center  my-[4px]'>
                    <span><IoLocationSharp size={25} className='mb-2 text-titleColor'/></span>
                    <p className="text-gray-700 text-base mb-2 text-[21px] leading-6 font-normal  ">
                        {item.subtitle}</p>
                </div>

            </div>
        </div>
    );
};

export default LoremCard;
