import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Layout/navigation';
import Footer from './Components/Layout/footer';
import About from './Components/Pages/about';
import Projects from './Components/Pages/projects';


export default class App extends Component {

  render() {
    return (
    
      <div >  
        <Navigation />
          <Router>
            <Switch>

              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />

          </Switch>
        </Router>  
        <Footer />
      </div>
      
    );
  }
}

