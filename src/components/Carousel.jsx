import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Carousel = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 200,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        
      };
      return (
 <Slider {...settings}>
          <div>
          <img 
             src="../src/assets/img5.jpg"
            alt="img5.jpg" 
        />
          </div>
          <div>
          <img 
             src="../src/assets/img6.jpg"
            alt="img6.jpg" 
        />
          </div>
          <div>
          <img 
             src="../src/assets/img8.jpg"
            alt="img8.jpg" 
        />
          </div>
          <div>
          <img 
             src="../src/assets/img9.jpg"
            alt="img9.jpg" 
        />
          </div>
        </Slider>
        
       
      )
}
