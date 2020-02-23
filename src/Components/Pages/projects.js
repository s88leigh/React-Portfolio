import React, { Component } from 'react'
import recipe from '../../assets/images/recipeGenerator.PNG';
import rewards from '../../assets/images/rewards.PNG';
import planner from '../../assets/images/day-planner.PNG';

export default class Projects extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 12">
                        <div className="card">
                            <div className="card-image">
                                <img src={recipe} alt="" />
                            </div>
                            <div className="card-content">
                                <h5 className="card-title">Recipe Generator</h5>
                                <p className="card-text">This App allows the user to generate recipes with the ingredients in the fridge.</p>
                            </div>
                            <div className="card-action">
                                <a href="https://andyrich75.github.io/Project1/">Click this link</a>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col s12 m4 12">
                        <div className="card">
                            <div className="card-image">
                                <img src={rewards} alt="" />
                                <div className="card-content">
                                    <h5 className="card-title">Rewards</h5>
                                    <p className="card-text">This fun interactive points-based app aims to motivate kids 12yrs and
                                        younger to help with chores around the house.  With enough earned points, the child can choose a
                                        reward of his/her choice. This app keeps track of points earned and used.
                                    </p>
                                </div>
                                <div className="card-action">
                                    <a href="http://enigmatic-caverns-81757.herokuapp.com/kid.html">Click this link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m4 12">
                        <div className="card">
                            <div className="card-image">
                                <img src={planner} alt="" />
                                </div>
                                <div className="card-content">
                                    <h5 className="card-title">Day Planner</h5>
                                    <p className="card-text">This App allows the user to plan their day during normal 9-5 work hours. It also displays current date and time. </p>
                                </div>
                                <div className="card-action">
                                    <a href="https://s88leigh.github.io/Day-Planner/">Click this link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
           
        )
    }
}


