import React from 'react'

export const Item = (item) => {


  return (
    <a href='#' className={item.class}>  
      <div className='option'>
        <ion-icon name={item.icon}></ion-icon>
        <h4>{item.name}</h4>
      </div>
    </a>
  )
}
