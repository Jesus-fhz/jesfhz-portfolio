import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Sidebar from './components/sidebar';



function App() {
  return (
    <>
      <Sidebar/>
      <div className="wrapper">
        <div className="container">
          <Home />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
