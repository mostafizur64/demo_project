import React from 'react'
import Container from '../../components/Container'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const items = ['Lorem', 'Ipsum', 'Lorem', 'Ipsum', 'Lorem', 'Ipsum', 'Lorem', 'Ipsum', 'Lorem', 'Ipsum',]
  return (
    <div className='bg-black py-8 mt-6'>
      <Container>

        <div className='flex items-center justify-center gap-[30px]'>
          {
            items.map((item, i) => (

              <h2 className=' text-white uppercase text-[24px] font-medium text-center'>{item}</h2>
            ))
          }
        </div>
        <div className='flex items-center justify-center gap-2 my-[40px]'>
          <div className='bg-white rounded-lg p-2 w-8 h-8  text-center flex items-center justify-center'> <FaFacebookF size={30} className='text-black' /></div>
          <div className='bg-white rounded-lg p-2 w-8 h-8  text-center flex items-center justify-center'> <FaLinkedinIn size={30} className='text-black' /></div>
          <div className='bg-white rounded-lg p-2 w-8 h-8  text-center flex items-center justify-center'> <FaTwitter size={30} className='text-black' /></div>
          <div className='bg-white rounded-lg p-2 w-8 h-8  text-center flex items-center justify-center'> <FaYoutube size={30} className='text-black' /></div>


        </div>
        <div className='text-center text-[#E1E1E1] text-[20px] leading-7 space-y-3'>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
      </Container>

    </div>
  )
}

export default Footer