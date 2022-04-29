import React from 'react'
import Carousel from 'react-material-ui-carousel'

import { ShopAPIResponse } from '../../../types/api-types'
import './ShopCard.scss'

export const ShopCard = (props: ShopAPIResponse) => {
  const { id, name, images, city, coords, description } = props

  return (
    <article
      key={id}
      className="shop-card"
    >
      <h3 className="shop-name">{name}</h3>
      <Carousel
        autoPlay
        navButtonsAlwaysVisible
        animation='fade'
        className="shop-carousel"
      >
        {images.map((image, i) => (
          <img
            key={`${name}-image-${i}`}
            alt={`${name}-${i}`}
            title={`${name}-${i}`}
            src={image}
          />
        ))}
      </Carousel>
      <p className="shop-location">{city}  ({coords})</p>
      <p className="shop-desc">{description}</p>
    </article>
  )
}
