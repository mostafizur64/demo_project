import React from 'react'
import img1 from '../../../assets/images/project/FloorPlans/img_1.png'
import img2 from '../../../assets/images/project/FloorPlans/img_2.png'
import img3 from '../../../assets/images/project/FloorPlans/img_3.png'
import img4 from '../../../assets/images/project/FloorPlans/img_4.png'
import img5 from '../../../assets/images/project/FloorPlans/img_5.png'
import img6 from '../../../assets/images/project/FloorPlans/img_6.png'
import img7 from '../../../assets/images/project/FloorPlans/img_7.png'
import img8 from '../../../assets/images/project/FloorPlans/img_8.png'
import Container from '../../../components/Container'
const FloorPlan = () => {
    return (
        <div className='lg:mt-[50px] mt-8'>
            <Container>
                <h2 className='text-[36px] font-semibold text-titleColor'>Floor Plans</h2>

                <div className='grid lg:grid-cols-4 grid-cols-1 gap-3 mt-[25px]'>
                    <img src={img1} alt="img" />
                    <img src={img2} alt="img" />
                    <img src={img3} alt="img" />
                    <img src={img4} alt="img" />
                    <img src={img5} alt="img" />
                    <img src={img6} alt="img" />
                    <img src={img7} alt="img" />
                    <img src={img8} alt="img" />
                </div>
            </Container>
        </div>
    )
}

export default FloorPlan
