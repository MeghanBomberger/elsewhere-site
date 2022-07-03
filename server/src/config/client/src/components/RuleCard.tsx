import React from 'react'
import ReactMarkdown from 'react-markdown';

import { RulesAPIResponse } from '../../../types/api-types'
import { imageCarouselFormatter } from '../helpers/images-helper';
import { ImageCarousel } from './ImageCarousel';
import './RuleCard.scss'

interface RulesCardProps {
  rule: RulesAPIResponse;
}

export const RuleCard = ({
  rule
}: RulesCardProps) => {
  const {
    id,
    subject,
    contents,
    images,
  } = rule

  return (
    <article className="rule-card">
      <h4>{subject}</h4>
      <ImageCarousel
        images={imageCarouselFormatter(images, subject.split(" ").join("-"), id)}
      />
      <ReactMarkdown className="content-text">{contents}</ReactMarkdown>
    </article>
  )
}
