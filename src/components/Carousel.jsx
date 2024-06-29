import { useState, useEffect } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

export default function Carousel({ items, autoSlide = false, autoSlideInterval = 3000 }) {
    const [curr, setCurr] = useState(0);

    // Function to move to previous item
    const prev = () => {
        setCurr(curr === 0 ? items.length - 1 : curr - 1);
    };

    // Function to move to next item
    const next = () => {
        setCurr(curr === items.length - 1 ? 0 : curr + 1);
    };

    // Auto slide effect
    useEffect(() => {
        let slideInterval = null;
        if (autoSlide) {
            slideInterval = setInterval(() => {
                setCurr((curr) => (curr === items.length - 1 ? 0 : curr + 1));
            }, autoSlideInterval);
        }
        return () => {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        };
    }, [autoSlide, autoSlideInterval, items.length]);

    return (
        <div className="overflow-hidden relative">
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {items.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 text-white font-semibold flex items-center justify-center text-[60px]">
                        <div className="bg-black/20">

                            <div className="px-32 py-12">
                                <h2 className="text-[60px] font-semibold uppercase tracking-wide leading-[90px] ">{item.title}</h2>
                                <p className="text-sm leading-[30px] tracking-wider text-[#FFFFFF] text-[20px] uppercase">{item.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 font-bold">
                <button
                    onClick={prev}
                    className="p-1  text-white "
                >
                    <RiArrowLeftSLine size={50} />
                </button>
                <button
                    onClick={next}
                    className="p-1  text-white "
                >
                    <RiArrowRightSLine size={50} />
                </button>
            </div>

           
        </div>
    );
}
