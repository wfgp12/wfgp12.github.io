import React from 'react'
import { NavLink } from 'react-router-dom'

export const Item = (item) => {

  return (
    <NavLink exact activeClassName='selected' to={`/${item.route}`}>
      <div className='option'>
        <ion-icon name={item.icon}></ion-icon>
        <h4>{item.name}</h4>
      </div>
    </NavLink>
  )
}
