import React from 'react';
import SlickSlider from 'react-slick';

import { Slide } from './Slider.styles';

const slides = [
  {
    img: '/images/Showcase.jpg',
  },
  {
    img: '/images/Showcase.jpg',
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true
};

const Slider = () => (
  <SlickSlider {...settings}>
    {slides.map(item => (
      <div key={item.img}>
        <Slide background={item.img}>
        </Slide>
      </div>
    ))}
  </SlickSlider>
);

export default Slider;