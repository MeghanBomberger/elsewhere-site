import React from 'react'

import '../SupporterCard.scss'
import { SupporterAPIResponse } from '../../../types/api-types'

interface SupporterCardProps {
  supporter: SupporterAPIResponse
}

export const SupporterCard = ({
  supporter
}: SupporterCardProps) => {
  const {
    id,
    username,
    roles
  } = supporter

  return (
    <article className="supporter-card">
      <p>{username}</p>
      {roles?.map(role => (
        <img
          key={`${id}-role-img-${role.id}`}
          src={role.image}
          alt={role.title}
          title={role.title}
        />
      ))}
    </article>
  )
}
