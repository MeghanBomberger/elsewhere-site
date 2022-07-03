import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown';

import { RulesAPIResponse } from '../../../types/api-types'
import { ArrowIcon } from '../assets/ArrowIcon';
import { imageCarouselFormatter } from '../helpers/images-helper';
import { ImageCarousel } from './ImageCarousel';
import './RuleCard.scss'

interface RulesCardProps {
  rule: RulesAPIResponse;
}

export const RuleCard = ({
  rule
}: RulesCardProps) => {
  const [contentsIsOpen, setContentsIsOpen] = useState<boolean>(false)
  const {
    id,
    subject,
    contents,
    images,
  } = rule

  return (
    <article className="rule-card">
      <div className="rule-header">
        <h4>{subject}</h4>
        <button
          className={`section-toggle-button ${contentsIsOpen ? 'open-contents' : 'closed-contents'}`}
          onClick={() => setContentsIsOpen(!contentsIsOpen)}
          title={`${contentsIsOpen ? 'Close' : 'Open'} ${subject} contents.`}
        >
          <ArrowIcon/>
        </button>
      </div>
      {contentsIsOpen && (
        <>
          <ImageCarousel
            images={imageCarouselFormatter(images, subject.split(" ").join("-"), id)}
          />
          <ReactMarkdown className="content-text">{contents}</ReactMarkdown>
        </>
      )}
    </article>
  )
}
