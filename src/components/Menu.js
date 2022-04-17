import React, { useState } from 'react'
import { Item } from './Iitem'

import './menu.css'

export const Menu = () => {
  const [items, setItems] = useState([
    {icon:'home',name:'Inicio', route: ''},
    {icon:'person',name:'Quien soy', route: 'quiensoy'},
    {icon:'briefcase',name:'Experiencia', route: 'experiencia'},
    {icon:'school',name:'Estudios', route: 'estudios'},
    {icon:'terminal',name:'Habilidades', route: 'habilidades'},
    {icon:'language',name:'Idiomas', route: 'idiomas'},
    ])
  
  const handleSelected = (itemid) => {
    
  }

  const handleOpenCLose  = () => {
    document.getElementById("container").classList.toggle("container_move");
    document.getElementById("menu").classList.toggle("menu_move");
  }  
  return (
    <div className='menu' id='menu'>            
            <div className='titlePage'>
              <button className='icon_menu' onClick={handleOpenCLose}>
                <ion-icon name="menu" ></ion-icon> 
              </button>
              <h1 id='title'>Perfil</h1>
            </div>

            <div className='optionMenu'>
              {
                items.map(item => (                  
                  <Item 
                    key={item.name}
                    {...item}
                  />
                ))
              }
            </div>

    </div>
    
  )
}
