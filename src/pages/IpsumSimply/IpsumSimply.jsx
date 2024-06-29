import React from 'react'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import LoremCard from '../LoremIpsum/LoremCard'
import Button from '../../components/Button'
import { FaAngleDoubleRight } from 'react-icons/fa'
import data from '../../../public/data.js'

const IpsumSimply = () => {
  return (
   
    <div className='lg:py-[47px] py-[30px]'>
    <Container>
        <Heading title='Lorem Ipsum simply' subTitle='Lorem Ipsum is simply dummy text' paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></Heading>

        <div className='lg:flex items-center justify-center lg:gap-5 gap-3  lg:mb-16 mb-8'>
        <div className='flex items-center justify-center '>
                <Button title={'land share'}  width={'164px'} height={'48px'} className='uppercase'  />
            </div>
        <div className='flex items-center justify-center '>
                <Button title={'Under construction'}  width={'229px'} height={'48px'} className={'uppercase'} />
            </div>
        <div className='flex items-center justify-center '>
                <Button title={'Ready Apartment'}  width={'187px'} height={'48px'} className={'uppercase'} />
            </div>
        </div>

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

export default IpsumSimply
