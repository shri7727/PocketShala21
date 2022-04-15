import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
        <Carousel infiniteLoop autoPlay>
            <div>
                <img src="../img1.jpeg" />
            </div>
            <div>
                <img src="../img2.jpeg" />
            </div>
            <div>
                <img src="../img-3.jpg" />
            </div>
            <div>
                <img src="../img-4.jpg" />
            </div>
        </Carousel>
    </div>
);
}