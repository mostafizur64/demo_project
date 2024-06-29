import React from 'react';
import Container from '../../../components/Container';
import LeftSlider from './LeftSlider';
import R_Slider from './R_Slider';

const P_Slider = () => {
  return (
    <div className='bg-[#EBFFF0] mt-16  '>
      <Container>
        <div className='flex items-center justify-center gap-10 lg:py-24 py-96'>
          {/* Left side */}
          <div className='w-1/2 '>
          <h2 className='text-[36px] font-semibold text-titleColor text-center mb-16'>Present</h2>

            <LeftSlider />
          </div>

          {/* Right side */}
          <div className='w-1/2'>
          <h2 className='text-[36px] font-semibold text-titleColor text-center mb-16'>Completed</h2>

            <R_Slider />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default P_Slider;
