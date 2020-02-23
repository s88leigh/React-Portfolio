import React, { Component } from 'react'
import './footer.css';
import resume from '../../assets/images/Resume_UNH.pdf';

export default class Footer extends Component {
    render() {
        return (
            <div>
                
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              
                <a class="grey-text text-lighten-3" href="https://github.com/s88leigh" > Github </a>
                <a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/sophie-leigh-224182bb/"> Linkedin </a>
                <a class="grey-text text-lighten-3" href={resume}> Resume </a>
               
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2014 Copyright 
            
            </div>
          </div>
        </footer>
            
            </div>
        )
    }
}

