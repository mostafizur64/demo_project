import React from 'react'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import LoremCard from './LoremCard'
import data from '../../../public/data.js'
import Button from '../../components/Button.jsx'
import { FaAngleDoubleRight } from 'react-icons/fa'

const LoremIpsum = () => {
    
    return (

        <div className='lg:py-[47px] py-[30px]'>
            <Container>
                <Heading title='Lorem Ipsum simply' subTitle='Lorem Ipsum is simply dummy text' paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></Heading>
                <div className=''>
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 items-center justify-center'>
                        {data.map((item, i) => (
                            <LoremCard item={item} key={i} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-center '>
                        <Button title={'Browse All'} icon={<><FaAngleDoubleRight size={15} /></>} width={'165px'} height={'48px'} className={'capitalize'} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default LoremIpsum
