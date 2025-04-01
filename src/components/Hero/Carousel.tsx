// React + Next
import styled, { keyframes } from "styled-components"
import carouselImageOne from "../../img/carousel/img1.png"
import carouselImageTwo from "../../img/carousel/img2.png"
import carouselImageThree from "../../img/carousel/img3.png"
import carouselImageFour from "../../img/carousel/img4.png"
import carouselImageFive from "../../img/carousel/img5.png"
import carouselImageSix from "../../img/carousel/img6.png"
import carouselImageSeven from "../../img/carousel/img7.png"
import carouselImageEight from "../../img/carousel/img8.png"

// Assets

const Carousel = () => {
  // Crear un array de 8 imágenes
  const images = [
    carouselImageOne,
    carouselImageTwo,
    carouselImageThree,
    carouselImageFour,
    carouselImageFive,
    carouselImageSix,
    carouselImageSeven,
    carouselImageEight,
  ]

  return (
    <CarouselContainer>
      <CarouselTrack>
        {images.map((image, index) => (
          <CarouselItem key={`carousel-item-${index}`}>
            <img src={image} alt={`Carousel panel ${index + 1}`} />
          </CarouselItem>
        ))}
        {/* Duplicamos las imágenes para crear el efecto infinito */}
        {images.map((image, index) => (
          <CarouselItem key={`carousel-item-duplicate-${index}`}>
            <img src={image} alt={`Carousel panel duplicate ${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  )
}

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  border-top: 2px solid #ebecfa;
`

const CarouselTrack = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 100s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`

const CarouselItem = styled.div`
  flex: 0 0 auto;
  height: 200px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }
`

export { Carousel }
