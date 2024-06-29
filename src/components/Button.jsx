import React from 'react';

const Button = ({ title = '', icon = '', width = '', height = '',className='' }) => {
    const buttonStyle = {
        width: width,
        height: height,
       
    };

    return (
        <div className="bg-titleColor text-[#FFFFFF] flex items-center justify-center lg:mt-[38px] mt-10" style={buttonStyle}>
            <button  className={`flex items-center justify-center focus:outline-none ${className}`}>
                {title} {icon && <span className="ml-2">{icon}</span>}
            </button>
        </div>
    );
};

export default Button;
