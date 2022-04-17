import React, { useState } from 'react'
import { Item } from './Iitem'

import './menu.css'

export const Menu = () => {
  const [items, setItems] = useState([
    {icon:'home',name:'Inicio', class:'selected'},
    {icon:'person',name:'Quien soy', class:''},
    {icon:'briefcase',name:'Experiencia', class:''},
    {icon:'school',name:'Estudios', class:''},
    {icon:'terminal',name:'Habilidades', class:''},
    {icon:'language',name:'Idiomas', class:''},
    ])


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
                    {...item}/>
                ))
              }

              {/* <a href='#' className='selected'>  
                <div className='option'>
                  <ion-icon name="home"></ion-icon>
                  <h4>Inicio</h4>
                </div>
              </a>
              <a href='#'> 
                <div className='option'>
                  <ion-icon name="person"></ion-icon>
                  <h4>Quien soy</h4>
                </div>
              </a>
              <a href='#'>
                <div className='option'>
                  <ion-icon name="briefcase"></ion-icon>
                  <h4>Experiencia</h4>
                </div> 
              </a>
              <a href='#'> 
                <div className='option'>
                <ion-icon name="school"></ion-icon>
                <h4>Estudios</h4>
                </div>
              </a>
              <a href='#'> 
                <div className='option'>
                  <ion-icon name="terminal"></ion-icon>
                  <h4>Habilidades</h4>  
                </div>
              </a>
              <a href='#'> 
                <div className='option'>
                  <ion-icon name="language"></ion-icon>
                  <h4>Idiomas</h4>
                </div>
              </a> */}
            </div>

    </div>
    
  )
}
