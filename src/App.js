import React from 'react';
import { Menu } from './components/Menu';

import './App.css';
import { Footer } from './components/Footer';

function App() {  
  
  return (
    <div className="App">
      
      <div id='container'>
          <Menu />  
          <Footer />      
      </div>

    </div>
  );
}

export default App;
