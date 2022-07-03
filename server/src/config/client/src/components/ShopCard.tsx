import React from 'react'

import { ShopAPIResponse } from '../../../types/api-types'
import './ShopCard.scss'
import { ImageCarousel } from './ImageCarousel'
import { imageCarouselFormatter } from '../helpers/images-helper'

export const ShopCard = (props: ShopAPIResponse) => {
  const { id, shopName, images, city, shopCoords, description, owner } = props

  console.log(shopCoords)

  return (
    <article
      key={id}
      className="shop-card"
    >
      <h3 className="shop-name">{shopName}</h3>
      <ImageCarousel
        images={imageCarouselFormatter(images, shopName, id)}
      />
      <p className="shop-location">
        {city}{shopCoords !== 'undefined, undefined, undefined' && `  (${shopCoords})`}  {owner && ` - Owned By: ${owner}`}</p>
      <p className="shop-desc">{description}</p>
    </article>
  )
}
