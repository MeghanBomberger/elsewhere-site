import React from 'react'

import { RoleAPIResponse } from '../../../types/api-types'
import './RoleCard.scss'

export const RoleCard = (props: RoleAPIResponse) => {
  console.log(props)

  return (
    <div>
      <article
        key={props.id}
        className="role-card"
      >
        <h3 className="role-title">{props.title}</h3>
        <img
          className="role-img"
          alt={`${props.venue} Role: ${props.title}`}
          title={`${props.venue} Role: ${props.title}`}
          src={props.image}
        />
        {props?.price && <p className="role-price">${props.price}</p>}
        <ul className="role-perks-list">
          {props.perks.map(perk => (
            <li
              key={`${props.title}-${perk}-perk`}
            >
              {perk}
            </li>
          ))}
        </ul>
      </article>
  </div>
  )
}