import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/navbar';
import Footer from './Components/Layout/footer';
import About from './Components/Pages/about';
import Projects from './Components/Pages/projects';
import Resume from './Components/Pages/resume';

class App extends Component {

  render() {


    return (
  
      <div >
      <Navbar />
    
      <About />
      <Projects />
      <Resume />
      <Footer/>
    
      </div>
    );
  }
}

export default App;
