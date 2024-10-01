import React from 'react';
import Slider from 'react-slick';
import bannerBg from "../../../images_new/background_2.png"
import banner1 from "../../../images_new/\/slide-3.png"

const CarouselBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const banners = [
    {
      image: banner1,
      alt: 'Banner 1',
      heading : 'Take a Good Care of Pets',
description : 'We are your local dog home boarding service giving you complete'
    },
    {
      image:banner1,
      alt: 'Banner 2',
       heading : 'Take a Good Care of Pets',
description : 'We are your local dog home boarding service giving you complete'
    },
    {
      image: banner1,
      alt: 'Banner 3',
       heading : 'Take a Good Care of Pets',
description : 'We are your local dog home boarding service giving you complete'
    },
  ];

  return (
    <div className="carousel-container" style={{ maxWidth: '1920px', margin: '0 auto' ,backgroundImage: `url(${bannerBg})`,  // Using template literals for dynamic URL
    backgroundSize: 'cover',             // Ensures the image covers the container
    backgroundPosition: 'center',        // Centers the image
    height: '500px' }}>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <div className='d-flex w-100  justify-content-around'>
              <div className='h-full w-1/2 d-flex flex-column justify-content-center '>
<h1>{banner.heading}</h1>
<p>{banner.description}</p>
              </div>
              <img
              src={banner.image}
              alt={banner.alt}
              style={{ width: '20%', height: '500px' }}
            />
            </div>
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselBanner;
