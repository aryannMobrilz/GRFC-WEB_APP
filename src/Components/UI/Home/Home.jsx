import React from 'react'
import SliderBanner from './SliderBanner'
import WelcomeSection from './WelcomeSection'
import ProductSection from './ProductSection'
import Newsletter from './Newsletter'
import Testimonials from './Testimonials'
import ServiceSection from './ServiceSection'

const Home = () => {
  return (
    <div>
        <SliderBanner/>
        {/* <WelcomeSection/> */}
        <ServiceSection/>
        <ProductSection/>
        {/* <Newsletter/> */}
        <Testimonials/>
    </div>
  )
}

export default Home
