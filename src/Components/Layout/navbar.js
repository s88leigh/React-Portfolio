import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';


export default class Navbar extends Component {

    componentDidMount() {
            document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }
    render() {

        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                        <a href="#" data-target="slide-out" className="sidenav-trigger" show-on-large><i className="material-icons">menu</i></a>

                        <a href="#" className="brand-logo">Sophie Leigh</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/about">About</a></li> 
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="/resume">Resume</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src="images/office.jpg" alt="pict"/>
                            </div> 

                         <a href="#user"><img className="circle" src="images/yuna.jpg" alt=""/></a> 
                                  <a href="#name"><span className="white-text name">John Doe</span></a> 
                                  <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                            <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li> 
                            <li><a href="#!">About</a></li>
                            <li><a href="#!">Projects</a></li>
                            <li><a href="#!">Resume</a></li>
                            <li><div className="divider"></div></li>
                           
                            <li><a className="subheader">Subheader</a></li>
                            <li><a className="waves-effect" href="#!">Linkedin</a></li>
                            <li><a className="waves-effect" href="#!">gitHub</a></li>
                            <li><a className="waves-effect" href="#!">Resume</a></li>
                </ul>
            </div>

        );
    }
}
            
