import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import { Header } from '../components'
import './Rules.scss'
import { RulesAPIResponse } from '../../../types/api-types'
import { RulesSection } from '../components/RulesSection'

export const Rules = () => {
  const [rules, setRules] = useState<RulesAPIResponse[]>([])
  const [categories, setCategories] = useState<string[]>([])

  const fetchRulesData = async () => {
    await axios.get(`/api/rules`)
      .then((res) => {
        if (res.data?.length > 0) {
          setRules(res.data) 
        }
      })
  }

  const rulesCategories = useCallback(async () => {
    const categoriesList: string[] = []
    await rules.forEach((rule, i) => {
      if ((i === 0 || categoriesList.includes(rule.category) === false) && rule?.category) {
        categoriesList.push(rule.category)
      }
    })
    setCategories(categoriesList)
  }, [rules])

  useEffect(() => {
    fetchRulesData()
  }, [])

  useEffect(() => {
    rulesCategories()
  }, [rules, rulesCategories])

  return (
    <div className="page rules">
      <Header/>
      <main className="main rules-main">
        <h2>Rules & Tips</h2>
        {categories?.map(category => (
          <RulesSection
            rules={rules?.filter(rule => rule.category === category) || []}
            category={category}
          />
        ))}
      </main>
    </div>
  )
}
