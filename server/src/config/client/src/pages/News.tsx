import React, {
  useState,
  useEffect,
} from 'react'
import axios from 'axios'
import format from 'date-fns/format'

import { NewsAPIResponse } from '../../../types/api-types'
import { baseURL } from '../helpers/axios-helpers'
import { Header } from '../components'
import './News.scss'
import { ImageCarousel } from '../components/ImageCarousel'

export const News = () => {
  const [newsData, setNewsData] = useState<NewsAPIResponse[]>([])

  const createNewsCards = (newsList: NewsAPIResponse[]) => {
    return newsList.map(article => (
      <article
        key={article.id}
        className='news-card'
      >
        <h3 className='news-title'>{article.title}</h3>
        <time className='article-date'>{format(new Date(article.publish_date), 'MMMM dd yyyy')}</time>
        <ImageCarousel
          images={article.images?.map((image, i) => ({
            url: image,
            title: `${article.title}-${i}`,
            id: `${article.id}-img${i}`
          })) || []}
        />
        <p className='article-contents'>{article.contents}</p>
        <p className='article-tags'>{article.category}</p>
      </article>
    ))
  }

  const fetchNewsData = async () => {
    await axios.get(`${baseURL}/api/news`)
    .then(res => {
      if (res.data) {
        const news = res.data
        setNewsData(news)
      }
    })
  }

  useEffect(() => {
    fetchNewsData()
  }, [])


  return (
    <div className="page news">
      <Header/>
      <main className="main">
        <h2>News</h2>
        {createNewsCards(newsData)}
      </main>
    </div>
  )
}
