import React from 'react'
import ContactBanner from '../ContactBanner/ContactBanner'
import ContactForm from '../ContactForm/ContactForm'
import ContactNumber from '../ContactNumber/ContactNumber'
import C_WouldYouLike from '../C_WouldYouLike/C_WouldYouLike'
import Testimonial from '../../Testimonial/Testimonial'
import Title from '../../Title/Title'
import Brand from '../../Brand/Brand'

const ContactUs = () => {
  return (
    <div>
      <ContactBanner/>
      <ContactForm/>
      <ContactNumber/>
      <C_WouldYouLike/>
      <Testimonial/>
      <Title/>
      <Brand/>

    </div>
  )
}

export default ContactUs
ContactUs