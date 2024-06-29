import React from 'react'
import Container from '../../../components/Container'
import { IoMdHome } from "react-icons/io";

const ContactBanner = () => {
    return (

        <div className='constactUs_container h-[75vh] '>
            <div className=''>
                <Container className=''>
                    <div className='absolute left-20 bottom-64 '>
                        <h2 className='text-[#FFFFFF] text-[52px] font-normal mb-4 leading-[78px] border-b-2 border-titleColor'>
                            Contact Form
                        </h2>
                    <div className='flex gap-4'>
                        <div className='flex items-center gap-2 border-titleColor border-r-4 -mr-3'>
                        <IoMdHome  className='text-white w-7 h-7'/>
                            <span className='font-medium text-[20px] text-white leading-8 mr-8'>Home</span>
                        </div>
                        <span className='font-medium text-[20px] text-white leading-8 ml-5'>Contact Us</span>

                    </div>
                    </div>

                </Container>
            </div>
        </div>
    )
}

export default ContactBanner
