import React from 'react'
import TCarousel from './TCarousel';
import Container from '../../components/Container';

const Testimonial = () => {
    const items = [
        { title: "Lorem Ipsum is simply dummy", subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "Lorem Ipsum is simply dummy 2", subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { title: "Lorem Ipsum is simply dummy 3", subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },

    ];
    return (


        <div className='bg-[#EBFFF0] h-full flex items-center justify-center'>
            <Container>
<div>
    <h2 className='text-titleColor text-center lg:mt-[67px] mt-[30px] mb-[42px] font-medium lg:text-[55px] text-[30px]'> WHAT OUR CLIENT DAYS</h2>
</div>
                <div className="relative mx-auto flex items-center justify-center  z-50" >
                    <TCarousel items={items} autoSlide autoSlideInterval={5000} />
                </div>
            </Container>
        </div>
    );
}

export default Testimonial
