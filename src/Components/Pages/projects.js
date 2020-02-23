import React, { Component } from 'react'
import recipe from '../../assets/images/recipeGenerator.PNG';
// import github from '../../assets/images/github.png';
// import github from '../../assets/images/github.png';

export default class Projects extends Component {
    render() {
        return (
            <div>
               
                {/* <img src={github} alt="" /> */}
                <div class="row">
                    <div class="col s4 m4 ">
                        <div class="card">
                            <div class="card-image">
                                <img src={recipe} alt=""/>
                            </div>
                                <div class="card-content">
                                <h5 class="card-title">Recipe Generator</h5>
                            <p class="card-text">This App allows the user to generate recipes with the ingredients in the fridge.
                            </p>
                                </div>
                                <div class="card-action">
                                    <a href="https://andyrich75.github.io/Project1/">Click this link</a>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}

                    {/* <div class="row"> */}
                    <div class="col s4 m4">
                        <div class="card">
                            <div class="card-image">
                                <img src="images/sample-1.jpg"/>
                                    <span class="card-title">Card Title</span>
                            </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}

                    {/* <div class="row"> */}
                    <div class="col s4 m4">
                        <div class="card">
                            <div class="card-image">
                                <img src="images/sample-1.jpg"/>
                                    <span class="card-title">Card Title</span>
                            </div>
                                <div class="card-content">
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div class="card-action">
                                    <a href="#">This is a link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        )
    }
}
        
        
