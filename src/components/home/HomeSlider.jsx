import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../assets/images/slider1.jpg';
import Slider2 from '../../assets/images/slider2.jpg';
import Slider3 from '../../assets/images/slider3.jpg';

export class HomeSlider extends Component {
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: true,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  };

    return (
      <div>


      <Slider {...settings}>
                <div>
                 <img className="slider-img" src={Slider1} />
                </div>
                <div>
                <img className="slider-img" src={Slider2} />
                </div>
                <div>
                <img className="slider-img" src={Slider3} />
                </div>
      
              </Slider>
    
      
                   </div>
    )
  }
}

export default HomeSlider
