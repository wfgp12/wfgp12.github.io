import React from 'react';
import { Menu } from './components/Menu';

import './App.css';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { AppRouter } from './AppRouter';

function App() {  
  
  return (
    <div className="App">
      
      <div id='container'> 
          <AppRouter />

          <Footer />      
      </div>

    </div>
  );
}

export default App;
