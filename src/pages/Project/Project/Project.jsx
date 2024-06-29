import React from 'react'
import P_Banner from './P_Banner/P_Banner'
import P_Description from '../P_Description/P_Description'
import P_Feature from '../P_Feature/P_Feature'
import FloorPlan from '../FloorPlan/FloorPlan'
import P_Slider from '../P_Slider/P_Slider'
import P_Video from '../P_Video/P_Video'
import P_GoogleMap from '../P_GoogleMap/P_GoogleMap'
import P_RecentProejcts from '../../../../P_RecentProejcts'
import C_WouldYouLike from '../../ContactUs/C_WouldYouLike/C_WouldYouLike'
import Testimonial from '../../Testimonial/Testimonial'
import Title from '../../Title/Title'
import Brand from '../../Brand/Brand'

const Project = () => {
  return (
    <div>
      <P_Banner/>
      <P_Description/>
      <P_Feature/>
      <FloorPlan/>
      <P_Slider/>
      <P_Video/>
      <P_GoogleMap/>
      <P_RecentProejcts/>
      <C_WouldYouLike/>
      <Testimonial/>
      <Title/>
      <Brand/>
    </div>
  )
}

export default Project
