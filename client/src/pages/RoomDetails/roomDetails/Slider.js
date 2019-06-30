import React from 'react';
import PropTypes from 'prop-types';
import SlickSlider from 'react-slick';
import { Slide } from './Slider.styles';

const notAvailable = '/images/not_available.jpg';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true
};

const Slider = ({ images }) => (
  <SlickSlider {...settings}>
    {images.length === 0 
      ?  <Slide background={notAvailable} />
      : images.map(({public_id, url}) => (
        <div key={public_id}>
          <Slide background={url} />
        </div>
      ))
    }
  </SlickSlider>
);

Slider.propTypes = {
  images: PropTypes.array.isRequired
};

export default Slider;