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
import { ShopCard } from '../components/ShopCard'

export const Shops = () => {
  const [openShops, setOpenShops] = useState<ShopAPIResponse[]>([])
  const [availableShops, setAvailableShops] = useState<ShopAPIResponse[]>([])

  const createShopCards = (shopsList: ShopAPIResponse[]) => {
    return shopsList.map(shop => (
      <ShopCard
        id={shop.id}
        city={shop.city}
        description={shop.description}
        images={shop.images}
        shopName={shop.shopName}
        shopCoords={shop.shopCoords}
        status={shop.status}
      />
    ))
  }

  const fetchShopsData = async () => {
    await axios.get(`${baseURL}/api/shops`)
      .then(res => {
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
