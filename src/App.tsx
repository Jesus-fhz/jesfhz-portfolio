import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Sidebar from "./components/sidebar";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            {/* <Sidebar /> */}
            <div className='wrapper'>
                <div className='container'>
                    <Home />
                    {/* <About />
          <Skills/>
          <Projects/>
          <Contact/> */}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
}

export default App;
