import React from 'react';
import './App.css';
import Header from './component/Header';
import Hero from './component/Hero';

import Service from './component/Service';
import Skills from './component/Skills';


function App() {
  return (
    <div className="App bg-black text-white">
  <Header/>
  <Hero/>
  <Service/>
  <Skills/>
 
  
 
    </div>
  );
}

export default App;
