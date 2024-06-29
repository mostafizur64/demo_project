import React from 'react'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import img from '../../assets/images/udayBuilder/udayBuilders.png'
import Button from '../../components/Button'
import { FaAngleDoubleRight } from "react-icons/fa";

const UdayBuilders = () => {
    return (
        <div className='bg-[#EBFFF0] lg:py-[47px] py-[30px]'>
            <Container>
                <Heading title='Uday Builders & Const. Ltd.' subTitle='Leading Joint venture complete (apartment) in BD' />
                <div className='lg:flex lg:text-start lg:px-0 px-2  text-center lg:mt-[47px] mt-[30px] '>
                    <div className='lg:w-1/2 w-full lg:mt-[10px] text-paragraphColor text-[24px] font-light leading-[36px]'>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap
                        </p>
                        <p className='lg:mt-[18px] mt-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy.</p>

                            <div>
                                <Button title={'About More'} icon={<><FaAngleDoubleRight size={15}/></>} width={'195px'} height={'48px'} className='uppercase'/>
                            </div>
                    </div>
                    <div className='lg:w-1/2 w-full'><img src={img} alt="img" /></div>
                </div>
            </Container>
        </div>
    )
}

export default UdayBuilders
