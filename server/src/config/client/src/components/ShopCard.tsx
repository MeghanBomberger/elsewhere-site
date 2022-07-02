import React from 'react'
import Carousel from 'react-material-ui-carousel'

import { ShopAPIResponse } from '../../../types/api-types'
import './ShopCard.scss'

export const ShopCard = (props: ShopAPIResponse) => {
  const { id, shopName, images, city, shopCoords, description } = props

  return (
    <article
      key={id}
      className="shop-card"
    >
      <h3 className="shop-name">{shopName}</h3>
      <Carousel
        autoPlay
        navButtonsAlwaysVisible
        animation='fade'
        className="shop-carousel"
      >
        {images.map((image, i) => (
          <img
            key={`${shopName}-image-${i}`}
            alt={`${shopName}-${i}`}
            title={`${shopName}-${i}`}
            src={image}
          />
        ))}
      </Carousel>
      <p className="shop-location">{city}  ({shopCoords})</p>
      <p className="shop-desc">{description}</p>
    </article>
  )
}
