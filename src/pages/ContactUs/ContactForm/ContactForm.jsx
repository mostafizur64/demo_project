import React from 'react'
import Container from '../../../components/Container'
import img from '../../../assets/images/ContactUs/ContactFormImg/ContactFormBgImg.png'
const ContactForm = () => {

    return (
        <div >
            <Container>
                <div className='bg-[#F5F5F5] lg:mt-[76px] mt-[30px]'>
                    <div className='lg:flex '>
                        {/* left side  */}
                        <div  className='p-10'>
                            <h2 className='lg:text-[38px] text-[20px] font-semibold text-[#000000] leading-[57px] uppercase '>Leave your message here!</h2>
                            <p className='lg:text-[18px] text-[14px] text-[#000000] font-normal my-4'>Please fill in your details below and one of our expert sales manager will get back to you as soon as possible.</p>
                            <p className='lg:text-[18px] text-[14px] text-[#000000] font-medium my-3'>Fields with (*) are required.</p>
                            {/* form are start  */}
                            <form action="">
                                <div className='flex flex-col w-full'>
                                    <label className='capitalize text-[20px] font-medium text-[#000000] '>Full Name*</label>
                                    <input type="text" className='border-titleColor border-b-2 outline-none h-[55px] shadow-lg mt-[10px]' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label className='capitalize text-[20px] font-medium text-[#000000] my-2'>Number*</label>
                                    <input type="text" className='border-titleColor border-b-2 outline-none h-[55px] shadow-lg mt-[10px]' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label className='capitalize text-[20px] font-medium text-[#000000] my-2'>Email*</label>
                                    <input type="text" className='border-titleColor border-b-2 outline-none h-[55px] shadow-lg mt-[10px]' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label className='capitalize text-[20px] font-medium text-[#000000] my-2'>Message*</label>
                                    <textarea rows={10} cols={10} type="text" className='border-titleColor border-b-2 outline-none  shadow-lg mt-[10px]' />
                                </div>
                                <div className='bg-titleColor mt-[12px] w-[193px] h-[68px] flex items-center justify-center rounded-[50px]'>

                                    <button type='submit' className='text-white text-[28px] font-semibold '>Submit</button>
                                </div>
                            </form>
                        </div>
                        {/* right side  */}
                        <div>
                            <img className='h-full w-full' src={img} alt="img" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactForm
