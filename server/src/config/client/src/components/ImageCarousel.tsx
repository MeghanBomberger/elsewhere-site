import React from 'react'

interface CarouselImage {
  url: string;
  title: string;
  id: string;
}

interface ImageCarouselProps {
  images: CarouselImage[]
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
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
        null
      )
}