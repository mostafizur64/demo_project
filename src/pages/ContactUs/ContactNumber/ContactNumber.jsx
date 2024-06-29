import React from 'react'
import Container from '../../../components/Container'
import { FaPhone,  } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import map from '../../../assets/images/ContactUs/C_NumberImg/map.png'
const ContactNumber = () => {
    return (
        <div className='bg-titleColor py-12'>
            <Container>
                <div className='flex gap-12'>
                    {/* first div  */}
                    <div className=''>
                        <h2 className='lg:text-[36px] text-[20px] font-medium text-[#FFFFFF]'>Lorem Ipsum</h2>
                        <div className='flex flex-col gap-1'>
                            <div className='relative z-50 flex items-center mt-2 gap-2'>
                                <span><FaPhone size={25} className='bg-white rounded-full  rotate-90 p-1 text-titleColor' />
                                </span>
                                <p className='text-white text-[24px]'>+880123456789</p>
                            </div>
                            <div className='relative z-50 flex items-center mt-2 gap-2'>
                                <span><FaPhone size={25} className='bg-white rounded-full  rotate-90 p-1 text-titleColor' />
                                </span>
                                <p className='text-white text-[24px]'>+880123456789</p>

                            </div>
                            <div className='relative z-50 flex items-center mt-2 gap-2'>
                                <span><FaPhone size={25} className='bg-white rounded-full  rotate-90 p-1 text-titleColor' />
                                </span>
                                <p className='text-white text-[24px]'>+880123456789</p>

                            </div>
                            <div className='relative z-50 flex items-center mt-2 gap-2'>
                                <span><FaPhone size={25} className='bg-white rounded-full  rotate-90 p-1 text-titleColor' />
                                </span>
                                <p className='text-white text-[24px]'>+880123456789</p>

                            </div>
                            <div className='relative z-50 flex items-center mt-2 gap-2'>
                                <span><FaPhone size={25} className='bg-white rounded-full  rotate-90 p-1 text-titleColor' />
                                </span>
                                <p className='text-white text-[24px]'>+880123456789</p>

                            </div>
                            <div className='relative z-50 flex items-center mt-2 gap-2'>
                                <span><FaPhone size={25} className='bg-white rounded-full  rotate-90 p-1 text-titleColor' />
                                </span>
                                <p className='text-white text-[24px]'>+880123456789</p>

                            </div>
                            <div className='relative z-50 flex items-center mt-2 gap-2'>
                                <span><FaPhone size={25} className='bg-white rounded-full  rotate-90 p-1 text-titleColor' />
                                </span>
                                <p className='text-white text-[24px]'>+880123456789</p>

                            </div>
                        </div>
                    </div>
                    {/* second div  */}
                    <div className='px-12 border-x-2 border-white w-[50%]'>
                    <h2 className='lg:text-[36px] text-[20px] font-medium text-[#FFFFFF] '>Lorem Ipsum</h2>

                      <div className='flex flex-col items-center  gap-10 '>
                      <div className='relative z-50 flex items-center mt-2 gap-2'>
                            <span><FaLocationDot size={25} className='bg-white rounded-full   p-1 text-titleColor' />
                            </span>
                            <p className='text-white text-[24px] font-normal text-start'>+It is a long established fact
                            that a reader will be distracted</p>
                        </div>
                      <div className='relative z-50 flex items-center mt-2 gap-2'>
                            <span><FaLocationDot size={25} className='bg-white rounded-full   p-1 text-titleColor' />
                            </span>
                            <p className='text-white text-[24px] font-normal'>+It is a long established fact
                            that a reader will be distracted</p>
                        </div>
                      <div className='relative z-50 flex items-center mt-2 gap-2'>
                            <span><FaLocationDot size={25} className='bg-white rounded-full   p-1 text-titleColor' />
                            </span>
                            <p className='text-white text-[24px] font-normal'>+It is a long established fact
                            that a reader will be distracted</p>
                        </div>
                      </div>
                    </div>
                    {/* third div  */}
                    <div>
                        <img className='w-full h-full' src={map} alt="map" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactNumber
