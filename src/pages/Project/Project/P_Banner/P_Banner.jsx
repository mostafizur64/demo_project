import React, { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";

const P_Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
        'https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?uid=R154280440&ga=GA1.2.592266231.1719644792&semt=ais_user',
        'https://img.freepik.com/free-photo/new-york-city-manhattan-midtown-dusk-with-brooklyn-bridge-usa_268835-749.jpg?t=st=1719672794~exp=1719676394~hmac=1d54aa3a163eb8932d8841da907148b7b53079048b4e47796a28f2803ea0cbcb&w=1380',
        'https://img.freepik.com/free-photo/statue-liberty-new-york-city-skyline-usa_268835-777.jpg?uid=R154280440&ga=GA1.2.592266231.1719644792&semt=ais_user',
        'https://img.freepik.com/premium-photo/skyscrapers-against-sky-sunset_1048944-29958635.jpg?uid=R154280440&ga=GA1.2.592266231.1719644792&semt=ais_user',
    ];

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative h-[70vh] mb-56">
            {/* Previous button */}
            <button
                className="absolute z-50 top-1/2 left-4 transform -translate-y-1/2  text-[#8FC345] p-2 rounded-full"
                onClick={prevSlide}
            >
                <MdArrowForwardIos className='rotate-180 w-16 h-12' />

            </button>

            {/* Next button */}
            <button
                className="absolute z-50 top-1/2 right-4 transform -translate-y-1/2  text-[#8FC345] p-2 rounded-full"
                onClick={nextSlide}
            >
                <MdArrowForwardIos className='w-12 h-12' />

            </button>

            {/* Carousel images */}
            <div className="relative h-full">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`slide-${index}`}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
            </div>

            {/* Thumbnail box */}
            <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2 -mb-12">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`relative w-36 h-36 cursor-pointer ${index !== activeIndex ? 'filter brightness-75' : ''}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        <img
                            src={image}
                            alt={`thumbnail-${index}`}
                            className="w-full h-full object-cover border-2 border-white rounded-md"
                        />
                        {index === activeIndex && (
                            <div className="absolute inset-0 bg-gray-500 opacity-25 rounded-md"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default P_Banner;
