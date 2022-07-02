import React from 'react'

import { ShopAPIResponse } from '../../../types/api-types'
import './ShopCard.scss'
import { ImageCarousel } from './ImageCarousel'

export const ShopCard = (props: ShopAPIResponse) => {
  const { id, shopName, images, city, shopCoords, description } = props

  return (
    <article
      key={id}
      className="shop-card"
    >
      <h3 className="shop-name">{shopName}</h3>
      <ImageCarousel
        images={images?.map((image, i) => ({
          url: image,
          title: `${shopName}-${i}`,
          id: `${id}-img${i}`
        })) || []}
      />
      <p className="shop-location">{city}  ({shopCoords})</p>
      <p className="shop-desc">{description}</p>
    </article>
  )
}
