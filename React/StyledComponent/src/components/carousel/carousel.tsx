import { useState } from "react";
import CarouselContainer from "./styles";

interface ICarouselProps {
  images: Array<string>;
}

const Carousel = ({ images }: ICarouselProps) => {
  const [currentImage] = useState(images[0]);

  return (
    <CarouselContainer>
      <div>{"<"}</div>
      <img src={currentImage} alt="" />
      <div>{">"}</div>
    </CarouselContainer>
  );
};

export default Carousel;
