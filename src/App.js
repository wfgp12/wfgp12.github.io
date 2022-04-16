import React from 'react';
import { Menu } from './components/Menu';

import './App.css';
import { Footer } from './components/Footer';

function App() {  
  
  return (
    <div className="App">
      
      <div id='container'>
          <Menu />  
          <main>
            <img src='https://avatars.githubusercontent.com/u/85379586?v=4' id='avatar' alt='Foto'></img>
          </main>
          <Footer />      
      </div>

    </div>
  );
}

export default App;
