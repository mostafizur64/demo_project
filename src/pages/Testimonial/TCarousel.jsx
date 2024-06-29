import { useState, useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import arrowIcon from '../../assets/images/whyUdday/arrowIcon.svg'
import personImg from '../../assets/images/Testimonail/person.png'
import quotationImg1 from '../../assets/images/Testimonail/quotationImg1.png'
import quotationImg2 from '../../assets/images/Testimonail/quotationImg2.png'
import { IoMdStar } from "react-icons/io";

export default function TCarousel({ items, autoSlide = false, autoSlideInterval = 3000 }) {
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
                    <div key={index} className="w-full flex-shrink-0 text-white font-semibold flex items-center justify-center px-20 text-[60px]">
                        <div className="bg-white px-4 mb-4 rounded-lg shadow-lg">
                            <div className="lg:flex items-center p-4 gap-4">
                                {/* left side  */}
                                <div className="">
                                    <img src={personImg} alt="personImg" />
                                    <div>
                                        <h3 className="text-titleColor text-[32px] font-bold text-center ">Marry Welson</h3>
                                        <p className="text-black font-[400] text-[20px] text-center">Founder and CEO OF PREMIUM </p>
                                    </div>
                                </div>
                                {/* right side  */}
                                <div className="relative md:w-[70%] w-full">
                                    <img src={quotationImg1} alt="quotationImg1" />
                                    <p className="text-[24px] font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                        aliquip ex ecommodo consequat. Duis aute irure dolor in reprehenderit </p>
                                    <img className="absolute bottom-0 right-0" src={quotationImg2} alt="quotationImg2" />
                                    <div className="flex items-center justify-center mt-8">
                                        <IoMdStar className="text-yellow-500" size={32} />
                                        <IoMdStar className="text-yellow-500" size={32} />
                                        <IoMdStar className="text-yellow-500" size={32} />
                                        <IoMdStar className="text-yellow-500" size={32} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 font-bold">
                <button
                    onClick={next}
                    className="p-2 text-white rounded-[20px] bg-white"
                ><FaArrowLeftLong size={20} className=" text-black" />

                </button>
                <button
                    onClick={next}
                    className="p-2 text-white rounded-[20px] bg-white"
                ><FaArrowLeftLong size={20} className="rotate-180 text-black" />

                </button>
            </div>


        </div>
    );
}
