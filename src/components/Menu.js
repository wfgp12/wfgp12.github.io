import React from 'react'

import './menu.css'

export const Menu = () => {
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
              <a href='#' className='selected'>  
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
              </a>
            </div>

    </div>
    
  )
}
