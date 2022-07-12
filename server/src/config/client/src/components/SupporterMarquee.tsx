import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'

import { SupporterAPIResponse } from '../../../types/api-types'
import { SupporterCard } from './SupporterCard'
import './SupporterMarquee.scss'

export const SupporterMarquee = () => {
  const [supporters, setSupporters] = useState<SupporterAPIResponse[]>([])

  const fetchSupportersData = async () => {
    await axios.get('/api/supporters')
      .then(res => {
        if (res.data) {
          setSupporters(res.data)
        }
      })
  }

  useEffect(() => {
    fetchSupportersData()
  }, [])

  return (
    <footer>
      <Marquee
        gradientColor={[33, 11, 44]}
        gradientWidth={100}
      >
        {supporters?.length && (<p className="thanks">A big thank you to all our supporters: </p>)}
        {supporters?.map(supporter => <SupporterCard supporter={supporter}/>)}
        <p className="call-to-action">If you'd like to be an Elsewhere supporter check out our <Link to="/roles">Patron and Discord Boost options</Link>.</p>
      </Marquee>
    </footer>
  )
}
