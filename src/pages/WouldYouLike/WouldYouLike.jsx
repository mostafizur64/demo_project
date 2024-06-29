import React from 'react';
import Container from '../../components/Container';
import backgroundImage from '../../assets/images/wouldyoulike/backgroundImg.jpg'; // Replace with the correct path to your main background image
import secondBgImg from '../../assets/images/wouldyoulike/secondBgImg.png'; // Replace with the correct path to your second background image
import { FaPhone } from "react-icons/fa6";

const WouldYouLike = () => {
    return (
        <div
            className="relative lg:mt-[60px] mt-[30px]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '466px', // Adjust height as needed
            }}
        >
            {/* Second Background Image as Overlay */}
            <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                    backgroundImage: `url(${secondBgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.6',
                }}
            ></div>

            <div className='h-full flex items-center justify-center'>
                <Container>

                    <div className="relative  w-full flex flex-col  text-center  z-50" >
                        <h2 className="lg:text-5xl text-3xl font-medium text-center">Would You Like</h2>
                        <h3 className="lg:text-3xl text-xl font-normal text-center my-6">To Have a Cup of Coffee!</h3>
                    </div>
                    {/* card items  */}
                    <div className='grid lg:grid-cols-4 grid-cols-1 w-[100%] gap-16 relative z-50'>
                        <div className='w-[100%]  bg-white rounded-[30px] px-12 py-4'>
                            <p>Buy a Property</p>
                            <div className='relative-50 flex items-center mt-2'>
                                <span><FaPhone size={25} className='bg-titleColor rounded-full  p-1 text-white' />
                                </span>
                                <p>+880123456789</p>
                            </div>
                        </div>
                        <div className='w-[100%]  bg-white rounded-[30px] px-12 py-4'>
                            <p>Buy a Property</p>
                            <div className='relative-50 flex items-center mt-2'>
                                <span><FaPhone size={25} className='bg-titleColor rounded-full  p-1 text-white' />
                                </span>
                                <p>+880123456789</p>
                            </div>
                        </div>
                        <div className='w-[100%]  bg-white rounded-[30px] px-12 py-4'>
                            <p>Buy a Property</p>
                            <div className='relative z-50 flex items-center mt-2'>
                                <span><FaPhone size={25} className='bg-titleColor rounded-full  p-1 text-white' />
                                </span>
                                <p>+880123456789</p>
                            </div>
                        </div>
                        <div className='w-[100%]  bg-white rounded-[30px] px-12 py-4'>
                            <p>Buy a Property</p>
                            <div className='relative-50 flex items-center mt-2'>
                                <span><FaPhone size={25} className='bg-titleColor rounded-full  p-1 text-white' />
                                </span>
                                <p>+880123456789</p>
                            </div>
                        </div>
                       

                    </div>
                </Container>
            </div>
        </div>
    );
};

export default WouldYouLike;
