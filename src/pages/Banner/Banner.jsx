import React from 'react'
import Carousel from '../../components/Carousel';
import Container from '../../components/Container';
const Banner = () => {
  const items = [
    { title: "Lorem Ipsum is simply dummy", subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Lorem Ipsum is simply dummy 2", subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
    { title: "Lorem Ipsum is simply dummy 3", subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },

  ];
  return (
    
    
    <div className='banner_container h-screen flex items-center justify-center'>
        <Container>

        <div className="relative mx-auto flex items-center justify-center  z-50" >
          <Carousel items={items} autoSlide autoSlideInterval={5000} />
        </div>
    </Container>
      </div>
  );


}



export default Banner
