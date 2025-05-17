import React from "react";
import { Carousel } from "antd";
import "../assets/css/Carrousel.css";

interface CarrouselItem {
  image: string;
  text: string;
}

interface CarrouselProps {
  items: CarrouselItem[];
}

const Carrousel: React.FC<CarrouselProps> = ({ items }) => {
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <Carousel autoplay>
          {items.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={item.image}
                alt={`slide-${index}`}
                className="carousel-image"
              />
              <div className="carousel-text">{item.text}</div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Carrousel;