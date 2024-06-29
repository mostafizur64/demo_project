import React from 'react'
import Container from './src/components/Container'
import LoremCard from './src/pages/LoremIpsum/LoremCard'
import Heading from './src/components/Heading'
import data from './public/data.js'
import Button from './src/components/Button.jsx'
import { FaAngleDoubleRight } from 'react-icons/fa'
const P_RecentProejcts = () => {
    return (
        <div className='lg:py-[47px] py-[30px]'>
            <Container>
                {/* <Heading title='Lorem Ipsum simply' subTitle='Lorem Ipsum is simply dummy text' paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></Heading> */}
                <h2 className='text-titleColor text-[20px] lg:text-[36px] font-semibold text-center'>Recent Projects</h2>
                <div className=''>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 items-center justify-center mt-[30px]'>
                        {data.map((item, i) => (
                            <LoremCard item={item} key={i} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-center '>
                        <Button title={'More'} icon={<><FaAngleDoubleRight size={15} /></>} width={'123px'} height={'48px'} className={'capitalize'} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default P_RecentProejcts
