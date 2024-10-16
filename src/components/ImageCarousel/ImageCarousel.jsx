import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import './carousel.scss'

const ImageCarousel = () => {
  return (
    <div className="imagecarousel">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        showArrows={true}
      >
        <div>
          <img src={banner1} className="carousel-image"/>
        </div>
        <div>
          <img src={banner2} className="carousel-image"/>
        </div>
        <div>
          <img src={banner1} className="carousel-image"/>
        </div>
        <div>
          <img src={banner2} className="carousel-image"/>
        </div>
        <div>
          <img src={banner1} className="carousel-image"/>
        </div>
        <div>
          <img src={banner2} className="carousel-image"/>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
