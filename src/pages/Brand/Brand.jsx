import React from 'react';
import img1 from '../../assets/images/brand/Framer.png';
import img2 from '../../assets/images/brand/Reddit.png';
import img3 from '../../assets/images/brand/Airbnb.png';
import img4 from '../../assets/images/brand/Tesla.png';
import img5 from '../../assets/images/brand/Uber.png';
import img6 from '../../assets/images/brand/Netflix.png';
import img7 from '../../assets/images/brand/Mailchimp.png';
import img8 from '../../assets/images/brand/Slack.png';
import img9 from '../../assets/images/brand/Medium.png';
import img10 from '../../assets/images/brand/Microsoft.png';
import Container from '../../components/Container';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Brand = () => {
    return (
        <div className='bg-[#ECFFF0] py-12'>
            <Container>
                {/* top brand  */}
                <div>
                    <marquee>
                        <div className='flex overflow-hidden'>
                            {images.map((img, index) => (
                                <div key={index} className='bg-white p-[30px]  rounded-lg'>
                                    <img src={img} className='' alt={`img${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </marquee>
                </div>
                {/* bottom brand  */}
                <div className='lg:mt-[50px] mt-8' >
                    <marquee className='lg:-mr-56'>
                        <div className='flex overflow-hidden justify-end items-end'>
                            {images.map((img, index) => (
                                <div key={index} className='bg-white p-[30px]  rounded-lg'>
                                    <img src={img} className='' alt={`img${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </marquee>
                </div>
            </Container>
        </div>
    );
};

export default Brand;
