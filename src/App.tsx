import React from 'react';
import Home from './components/Home';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <Sidebar/>
      <div className="wrapper">
        <div className="container">
          <Home/>
        </div>
      </div>
      
    </>
  );
}

export default App;
