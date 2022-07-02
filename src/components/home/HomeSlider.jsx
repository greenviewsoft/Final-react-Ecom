import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
    const SliderData = this.props.data;
    const MyView = SliderData.map((SliderList,i) =>{
      return<div key={i.toString()}>
      <img className="slider-img" src={SliderList.slider_image} />
     </div>
    
    })
  
    return (
      <div>


      <Slider {...settings}>
               
      {MyView}
              </Slider>
    
      
                   </div>
    )
  }
}

export default HomeSlider
