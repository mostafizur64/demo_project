import React from 'react';
import img1 from '../../assets/images/location/img_1.png';
import img2 from '../../assets/images/location/img_2.png';
import img3 from '../../assets/images/location/img_3.png';
import img4 from '../../assets/images/location/img_4.png';
import img5 from '../../assets/images/location/img_5.png';
import { MdAttachFile } from "react-icons/md";

const Location = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-4 grid-cols-1 ">
                <div className="relative group col-span-2">
                    <img className="w-full h-full" src={img1} alt="img" />
                    <div className="absolute top-0 left-0 ">
                    <p className="text-white text-[30px] font-semibold  px-6 py-3 uppercase">Gulshan</p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <p className="text-white  font-normal text-[24px] px-6 py-3 uppercase">
                      2 <br /> Properties
                    </p>
                </div>
                    <div className="absolute inset-0 bg-titleColor opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                        <p className="text-white text-lg font-bold"><MdAttachFile size={40} className='-rotate-45'/>
                        </p>
                    </div>
                </div>
                <div className="relative group">
                    <img className="w-full h-full" src={img2} alt="img" />
                    <div className="absolute top-0 left-0 ">
                    <p className="text-white text-[30px] font-semibold  px-6 py-3 uppercase">Badda</p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <p className="text-white  font-normal text-[24px] px-6 py-3 uppercase">
                      2 <br /> Properties
                    </p>
                </div>
                    <div className="absolute inset-0 bg-titleColor opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                        <p className="text-white text-lg font-bold"><MdAttachFile size={40} className='-rotate-45'/>
                        </p>
                    </div>
                </div>
                <div className="relative group ">
                    <img className="w-full h-full" src={img3} alt="img" />
                    <div className="absolute top-0 left-0 ">
                    <p className="text-white text-[30px] font-semibold  px-6 py-3 uppercase">Bashabo</p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <p className="text-white  font-normal text-[24px] px-6 py-3 uppercase">
                      2 <br /> Properties
                    </p>
                </div>
                    <div className="absolute inset-0 bg-titleColor opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                        <p className="text-white text-lg font-bold"><MdAttachFile size={40} className='-rotate-45' />
                        </p>
                    </div>
                </div>
                <div className="relative group ">
                    <img className="w-full h-full" src={img4} alt="img" />
                    <div className="absolute top-0 left-0 ">
                    <p className="text-white text-[30px] font-semibold  px-6 py-3 uppercase">Mirpur</p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <p className="text-white  font-normal text-[24px] px-6 py-3 uppercase">
                      2 <br /> Properties
                    </p>
                </div>
                    <div className="absolute inset-0 bg-titleColor opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                        <p className="text-white text-lg font-bold"><MdAttachFile size={40} className='-rotate-45' />
                        </p>
                    </div>
                </div>
                <div className="relative group col-span-2">
                    <img className="w-full h-full" src={img5} alt="img" />
                    <div className="absolute top-0 left-0 ">
                    <p className="text-white text-[30px] font-semibold  px-6 py-3 uppercase">Banani</p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <p className="text-white  font-normal text-[24px] px-6 py-3 uppercase">
                      2 <br /> Properties
                    </p>
                </div>
                    <div className="absolute inset-0 bg-titleColor opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                        <p className="text-white text-lg font-bold"><MdAttachFile size={40} className='-rotate-45' />
                        </p>
                    </div>
                </div>
                <div className="relative group ">
                    <img className="w-full h-full" src={img1} alt="img" />
                    <div className="absolute top-0 left-0 ">
                    <p className="text-white text-[30px] font-semibold  px-6 py-3 uppercase">Bashundara</p>
                </div>
                <div className="absolute bottom-0 right-0">
                    <p className="text-white  font-normal text-[24px] px-6 py-3 uppercase">
                      2 <br /> Properties
                    </p>
                </div>
                    <div className="absolute inset-0 bg-titleColor opacity-0 group-hover:opacity-50 transition-opacity flex items-center justify-center">
                        <p className="text-white text-lg font-bold"><MdAttachFile size={40} className='-rotate-45' />
                        </p>
                    </div>
                </div>
             
            </div>
        </div>
    );
};

export default Location;
