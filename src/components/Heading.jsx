import React from 'react'

const Heading = ({title,subTitle,paragraph=''}) => {
  return (
    <div>
      <h2 className='text-headingColor text-[55px] font-medium text-center'>{title}</h2>
      <h3 className='text-subHeaderColor text-[38px] font-medium text-center'>{subTitle}</h3>
      <h4 className='text-subHeaderColor text-[20px] font-normal text-center my-[10px]'>{paragraph}</h4>
    </div>
  )
}

export default Heading
