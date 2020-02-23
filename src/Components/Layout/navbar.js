import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import {Link} from 'react-router-dom';
import sophie from '../../assets/images/sophie.png';

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
                            <li><Link to="/">About</Link></li> 
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        </div>
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={sophie} alt="pict"/>
                            </div> 

                         <a href="#user"><img className="circle" src="images/yuna.jpg" alt=""/></a> 
                                  <a href="#name"><span className="white-text name">Sophie Leigh</span></a> 
                                  <a href="#email"><span className="white-text email">sophie88leigh@gmail.com</span></a>
                        </div>
                    </li>
                            
                            <li><Link to="#!">About</Link></li>
                            <li><Link to="#!">Projects</Link></li>
                            <li><Link to="#!">Resume</Link></li>
                            <li><div className="divider"></div></li>
                           
                            <li><a className="subheader">Subheader</a></li>
                            <li><Link to="#!"><i className="material-icons">email</i></Link></li> 
                            <li><Link to="#!">Linkedin</Link></li>
                            <li><Link to="#!">gitHub</Link></li>
                            <li><Link to="#!">Resume</Link></li>
                </ul>
            </div>

        );
    }
}
            
