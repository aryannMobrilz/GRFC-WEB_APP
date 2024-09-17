import React from 'react'
import SliderBanner from './SliderBanner'
import WelcomeSection from './WelcomeSection'
import ProductSection from './ProductSection'
import Newsletter from './Newsletter'
import Testimonials from './Testimonials'
import ServiceSection from './ServiceSection'
import CarouselBanner from '../Carousel/CarouselBanner'
import TestimonialCarousel from '../Testimonial/TestimonialCarousel'

const Home = () => {
  return (
    <div>
        {/* <SliderBanner/> */}
        <CarouselBanner/>
        {/* <WelcomeSection/> */}
        <ServiceSection/>
        <ProductSection/>
        {/* <Newsletter/> */}
        {/* <Testimonials/> */}
        <TestimonialCarousel/>
    </div>
  )
}

export default Home
