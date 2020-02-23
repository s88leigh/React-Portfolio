import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Layout/navbar';
import Footer from './Components/Layout/footer';
import About from './Components/Pages/about';
import Projects from './Components/Pages/projects';
import Resume from './Components/Pages/resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {


    return (

      <div >
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/about"> <About /></Route>
            
            <Route exact path="/projects"> <Projects /></Route>
           
            <Route exact path="/contact"> <Resume /></Route>

          </Switch>
        </Router>  
        <Footer />
      </div>
    );
  }
}

export default App;
