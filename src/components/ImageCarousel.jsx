import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import intro from "../images/intro.png";

const ImageCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      totalSlides={3}
    >
      <Slider>
        <Slide index={0}><img src={intro} alt="" /></Slide>
        <Slide index={1}>I am the second Slide.</Slide>
        <Slide index={2}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default ImageCarousel;
