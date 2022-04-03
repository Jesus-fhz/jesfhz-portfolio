import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Sidebar from './components/sidebar';
import Skills from './components/Skills';



function App() {
  return (
    <>
      <Sidebar/>
      <div className="wrapper">
        <div className="container">
          <Home />
          <About />
          <Skills/>
        </div>
      </div>
    </>
  );
}

export default App;
