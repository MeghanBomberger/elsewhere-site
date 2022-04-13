import React, {
  useState,
  useEffect,
} from 'react'
import axios from 'axios'
import Carousel from 'react-material-ui-carousel'

import { CitiesAPIResponse } from '../../../types/api-types'
import { baseURL } from '../helpers/axios-helpers'
import { Header } from '../components'
import './Cities.scss'

export const Cities = () => {
  const [citiesData, setCities] = useState<CitiesAPIResponse[]>([])

  const createCityCards = (citiesList: CitiesAPIResponse[]) => {
    return citiesList.map(city => (
      <article
        key={city.id}
        className='city-card'
      >
        <h3 className='city-name'>{city.name}</h3>
        <Carousel
          autoPlay
          navButtonsAlwaysVisible
          animation='fade'
          className='city-carousel'
        >
          {city.images.map((image, i) => (
            <img
              key={`${city.name}-image-${i}`}
              alt={`${city.name}-${i}`}
              title={`${city.name}-${i}`}
              src={image}
            />
          ))}
        </Carousel>
        <p className='city-location'>{city.coords}</p>
        <p className='city-desc'>{city.description}</p>
      </article>
    ))
  }

  const fetchCitiesData = async () => {
    await axios.get(`${baseURL}/api/cities`)
    .then(res => {
      if (res.data) {
        const cities = res.data
        setCities(cities)
      }
    })
  }

  useEffect(() => {
    fetchCitiesData()
  }, [])

  return (
    <div className="page cities">
      <Header/>
      <main className="main">
        <h2>Cities</h2>
        {createCityCards(citiesData)}
      </main>
    </div>
  )
}
