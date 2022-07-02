import React, { useCallback, useState } from 'react'

import { ArrowIcon } from "../assets/ArrowIcon"
import './ImageCarousel.scss'

interface CarouselImage {
  url: string;
  title: string;
  id: string;
}

interface ImageCarouselProps {
  images: CarouselImage[]
}

export const ImageCarousel = ({ images = [] }: ImageCarouselProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0)

  const nextImage = useCallback(() => {
    currentImage === images.length - 1
      ? setCurrentImage(0)
      : setCurrentImage(currentImage + 1)
  }, [currentImage, images.length])

  const prevImage = useCallback(() => {
    currentImage === 0
      ? setCurrentImage(images.length - 1)
      : setCurrentImage(currentImage - 1)
  }, [currentImage, images.length])

  return images.length === 0 
    ? null
    : images.length === 1
      ? (
        <img
          className="single-image"
          src={images[0].url}
          title={images[0].title}
          alt={images[0].title}
        />
      )
      : (
        <div className="carousel-container">
          <img
            className="carousel-image"
            src={images[currentImage].url}
            title={images[currentImage].title}
            alt={images[currentImage].title}
          />
          <button 
            className="prev-image image-nav"
            onClick={prevImage}
          >
            <ArrowIcon/>
          </button>
          <button 
            className="next-image image-nav"
            onClick={nextImage}
          >
            <ArrowIcon/>
          </button>
          <section className="dot-button-container">
            {images.map((image, i) => (
              <button
                className={currentImage === i ? "dot-button selected-image-dot" : "dot-button"}
                title={`select image #${i}`}
                onClick={() => setCurrentImage(i)}
              />
            ))}
          </section>
        </div>
      )
}
