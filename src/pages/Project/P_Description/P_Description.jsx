import React from 'react'
import img1 from '../../../assets/images/project/description/img_1.png'
import img2 from '../../../assets/images/project/description/img_2.png'
import img3 from '../../../assets/images/project/description/img_3.png'
import img4 from '../../../assets/images/project/description/img_4.png'
import img5 from '../../../assets/images/project/description/img_5.png'
import img6 from '../../../assets/images/project/description/img_6.png'
import Container from '../../../components/Container'
import { FaBuildingCircleArrowRight } from "react-icons/fa6";
import { GiWheelbarrow } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { FaAsymmetrik } from "react-icons/fa";
import { MdOutlineTextIncrease } from "react-icons/md";
import { BiArea } from "react-icons/bi";


const P_Description = () => {
    return (
        <div className='lg:mt-[100px] mt-8'>
            <Container>

                <div className='lg:flex items-center justify-center gap-10'>
                    <div className='flex gap-2 '>
                        <FaBuildingCircleArrowRight size={40} className='text-titleColor' />


                        <div>
                            <h2 className='text-[24px] font-semibold text-[#000000]'>
                                Bedrooms
                            </h2>
                            <span className='text-[20px] font-normal text-[#000000]'>04</span>
                        </div>
                    </div>
                    <div className='flex gap-2 '>
                        <GiWheelbarrow size={40} className='text-titleColor' />


                        <div>
                            <h2 className='text-[24px] font-semibold text-[#000000]'>
                                Bedrooms
                            </h2>
                            <span className='text-[20px] font-normal text-[#000000]'>04</span>
                        </div>
                    </div>
                    <div className='flex gap-2 '>
                        <FaAsymmetrik size={40} className='text-titleColor' />


                        <div>
                            <h2 className='text-[24px] font-semibold text-[#000000]'>
                                Garage
                            </h2>
                            <span className='text-[20px] font-normal text-[#000000]'>04</span>
                        </div>
                    </div>
                    <div className='flex gap-2 '>
                        <SlCalender size={40} className='text-titleColor' />


                        <div>
                            <h2 className='text-[24px] font-semibold text-[#000000]'>
                            Year Built
                            </h2>
                            <span className='text-[20px] font-normal text-[#000000]'>04</span>
                        </div>
                    </div>
                    <div className='flex gap-2 '>
                        <BiArea  size={40} className='text-titleColor' />


                        <div>
                            <h2 className='text-[24px] font-semibold text-[#000000]'>
                            Area
                            </h2>
                            <span className='text-[20px] font-normal text-[#000000]'>04</span>
                        </div>
                    </div>
                    <div className='flex gap-2 '>
                        <MdOutlineTextIncrease size={40} className='text-titleColor' />


                        <div>
                            <h2 className='text-[24px] font-semibold text-[#000000]'>
                                Lot of Size
                            </h2>
                            <span className='text-[20px] font-normal text-[#000000]'>04</span>
                        </div>
                    </div>
                  
                </div>
                <div className='my-12'>
                    <h2 className='text-[36px] font-semibold text-titleColor'>Discription</h2>
                    <p className='text-[24px] text-[#787878] font-normal mt-6'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                     making this the first true generator on the Internet.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default P_Description
