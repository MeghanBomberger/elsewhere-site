import React, {
  useState,
  useEffect,
} from 'react'
import axios from 'axios'
import Carousel from 'react-material-ui-carousel'

import { ShopAPIResponse } from '../../../types/api-types'
import { baseURL } from '../helpers/axios-helpers'
import { Header } from '../components'
import './Shops.scss'

export const Shops = () => {
  const [openShops, setOpenShops] = useState<ShopAPIResponse[]>([])
  const [availableShops, setAvailableShops] = useState<ShopAPIResponse[]>([])

  const createShopCards = (shopsList: ShopAPIResponse[]) => {
    return shopsList.map(shop => (
      <article
        key={shop.id}
        className="shop-card"
      >
        <h3 className="shop-name">{shop.shopName}</h3>
        <Carousel
          autoPlay
          navButtonsAlwaysVisible
          animation='fade'
          className="shop-carousel"
        >
          {shop.images.map((image, i) => (
            <img
              key={`${shop.shopName}-image-${i}`}
              alt={`${shop.shopName}-${i}`}
              title={`${shop.shopName}-${i}`}
              src={image}
            />
          ))}
        </Carousel>
        <p className="shop-location">{shop.city}  ({shop.shopCoords})</p>
        <p className="shop-desc">{shop.description}</p>
      </article>
    ))
  }

  const fetchShopsData = async () => {
    await axios.get(`${baseURL}/api/shops`)
      .then(res => {
        console.log(res.data)
        if (res.data) {
          const shops = res.data
          const openShopsData = shops.filter((shop: ShopAPIResponse) => shop.status === 'Open')
          const availableShopsData = shops.filter((shop: ShopAPIResponse) => shop.status === 'Available')
          setOpenShops(openShopsData)
          setAvailableShops(availableShopsData)
        }
      })
  }

  useEffect(() => {
    fetchShopsData()
  }, [])

  return (
    <div className="page shops">
      <Header/>
      <main className="main">
        <h2>Shops</h2>
        {createShopCards(openShops)}
        <h2>Available Shop Spaces</h2>
        {createShopCards(availableShops)}
      </main>
    </div>
  )
}
