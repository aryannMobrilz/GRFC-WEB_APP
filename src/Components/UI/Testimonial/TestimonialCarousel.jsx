import React from 'react';
import Slider from 'react-slick';
import test from "../../../images_new/doctor2.png"

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,  // Disable arrows if you just want dots
  };

  const testimonials = [
    {
      text: 'This is the best service I have ever used. Highly recommend it!',
      name: 'John Doe',
      designation: 'CEO, Company Inc.',
      image: test, // Replace with an actual image
    },
    {
      text: 'Fantastic experience! They truly care about their customers.',
      name: 'Jane Smith',
      designation: 'Marketing Manager, Business LLC',
      image: test, // Replace with an actual image
    },
    {
      text: 'Exceptional quality and customer service. I am very satisfied!',
      name: 'Michael Johnson',
      designation: 'Freelancer',
      image: test, // Replace with an actual image
    },
  ];

  return (
    <div className="testimonial-carousel" style={{ maxWidth: '800px', margin: '0 auto', padding: '50px 0' }}>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item d-flex justify-content-center align-items-center flex-column" style={{ textAlign: 'center' }}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              style={{ borderRadius: '50%', marginBottom: '20px', width: 'fit-content', height: '100px' }}
            />
            <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>"{testimonial.text}"</p>
            <h3 style={{ marginBottom: '5px' }}>{testimonial.name}</h3>
            <p style={{ color: '#777' }}>{testimonial.designation}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
