import React from 'react';
import Container from '../../../components/Container';
import img from '../../../assets/images/project/Feature/feature.png';

const P_Feature = () => {
    // Array of feature items with image and description
    const featureItems = [
        { id: 1, imgSrc: img, description: 'Lorem Ipsum ' },
        { id: 2, imgSrc: img, description: 'Lorem Ipsum ' },
        { id: 3, imgSrc: img, description: 'Lorem Ipsum ' },
        { id: 4, imgSrc: img, description: 'Lorem Ipsum ' },
        { id: 5, imgSrc: img, description: 'Lorem Ipsum ' },
        { id: 6, imgSrc: img, description: 'Lorem Ipsum ' },
        { id: 7, imgSrc: img, description: 'Lorem Ipsum ' },
        { id: 8, imgSrc: img, description: 'Lorem Ipsum ' },
        
    ];

    return (
        <div>
            <Container>
                <div>
                    <h2 className="text-[36px] font-semibold text-titleColor mb-10">Feature</h2>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-56 gap-6">
                        {featureItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-4">
                                <img src={item.imgSrc} alt={`img-${item.id}`} />
                                <span className="text-[20px] text-[#000000] font-medium">{item.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default P_Feature;
