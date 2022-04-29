import React from 'react'

import { RoleAPIResponse } from '../../../types/api-types'
import './RoleCard.scss'

export const RoleCard = (props: RoleAPIResponse) => {
  const {id, title, venue, price, perks, image} = props
  return (
    <div>
      <article
        key={id}
        className="role-card"
      >
        <h3 className="role-title">{title}</h3>
        <img
          className="role-img"
          alt={`${venue} Role: ${title}`}
          title={`${venue} Role: ${title}`}
          src={image}
        />
        {props?.price && <p className="role-price">${price}</p>}
        <ul className="role-perks-list">
          {perks.map(perk => (
            <li
              key={`${title}-${perk}-perk`}
            >
              {perk}
            </li>
          ))}
        </ul>
      </article>
  </div>
  )
}
