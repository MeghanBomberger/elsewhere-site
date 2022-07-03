import React, { useState } from 'react'

import { RulesAPIResponse } from '../../../types/api-types'
import { ArrowIcon } from '../assets/ArrowIcon';
import './RulesSection.scss'
import { RuleCard } from './RuleCard'

interface RulesSectionProps {
  rules: RulesAPIResponse[];
  category: string;
}

export const RulesSection = ({
  rules = [],
  category = '',
}: RulesSectionProps) => {
  const [sectionIsOpen, setSectionIsOpen] = useState<boolean>(false)

  return (
    <section className="rules-section">
      <div className="section-header">
        <h3>{category}</h3>
        <button
          className={`section-toggle-button ${sectionIsOpen ? 'open-section' : 'closed-section'}`}
          onClick={() => setSectionIsOpen(!sectionIsOpen)}
          title={`${sectionIsOpen ? 'Close' : 'Open'} ${category} rules section.`}
        >
          <ArrowIcon/>
        </button>
      </div>
      
      {sectionIsOpen && rules?.length > 0 && (
        <div className="rules-list">
          {rules.map((rule, i) => (
            <RuleCard
            key={`${category}-${rule.id}`}
            rule={rule}
            />
            ))}
        </div>
      )}
    </section>
  )
}
