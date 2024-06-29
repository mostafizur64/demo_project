import React from 'react'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import img1 from '../../assets/images/whyUdday/img_1.png'
import img2 from '../../assets/images/whyUdday/img_2.png'
import img3 from '../../assets/images/whyUdday/img_3.png'
import img4 from '../../assets/images/whyUdday/img_4.png'
import items from '../../../public/items.js'
const WhyUday = () => {
    return (
        <div className='bg-[#EBFFF0] lg:py-[47px] py-[30px] mt-8'>
            <Container>
                <div>
                    <Heading title='Why Udday' />
                    <div className='flex w-full  gap-[113px] lg:mt-[90px] mt-[40px]'>
                        {/* left side card  */}
                        <div className='w-1/2 flex flex-col gap-[11px] h-full'>
                            {items.map((item) => (
                                <div className='bg-white flex   gap-4 items-center justify-between px-4 py-4 rounded-[10px]'>
                                    <h2>{item.title}</h2>
                                    <div><img src={item.icon} alt="arrow" /></div>

                                </div>
                            ))}
                        </div>
                        {/* right side card  */}
                        <div className='w-1/2'>
                            <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
                                <div className='w-[100%]'><img className='w-full' src={img1} alt="image" /></div>
                                <div className='w-[100%]'><img className='w-full' src={img2} alt="image" /></div>
                                <div className='w-[100%]'><img className='w-full' src={img3} alt="image" /></div>
                                <div className='w-[100%]'><img className='w-full' src={img4} alt="image" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WhyUday
