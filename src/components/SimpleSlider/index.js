import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from './SimpleSlider.styles'

export default function SimpleSlider({ header, children }) {
  let settings = {
   infinite: false,
   speed: 900,
   slidesToShow: 5,
   slidesToScroll: 4,
   easing: "ease-in-out",
   initialSlide: 0,
   responsive: [{
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
         }
      },
      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
     <Container>
        <h1>{header}</h1>
         <Slider {...settings}>
            {children}
         </Slider>
      </Container>
      
 
    
  );
}