import React, {
  useState,
  useEffect,
} from 'react'
import axios from 'axios'
import format from 'date-fns/format'
import ReactMarkdown from 'react-markdown'

import { NewsAPIResponse } from '../../../types/api-types'
import { Header } from '../components'
import './News.scss'
import { ImageCarousel } from '../components/ImageCarousel'
import { imageCarouselFormatter } from '../helpers/images-helper'

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
          images={imageCarouselFormatter(article.images, article.title, article.id)}
        />
        <ReactMarkdown className="article-contents">{article.contents}</ReactMarkdown>
        <p className='article-tags'>{article.category}</p>
      </article>
    ))
  }

  const fetchNewsData = async () => {
    await axios.get(`/api/news`)
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
