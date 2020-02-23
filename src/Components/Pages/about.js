import React, { Component } from 'react'
import './about.css';
import sophie from '../../assets/images/sophie.png';

export default class About extends Component {
    render() {
        return (
            <div className="container">
               
                <h2 className="header">About me</h2>
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={sophie} alt="" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">

                        <p className="card-text">
                                I'm excited to become a web developer!
                                <br/>   
                                    For the past several years, I took some time off to invest in my children, but am
                                        looking to
                                        make my return to the workplace with a new career path. Now that my children are more
                                        independant,
                                        I have time to acquire the skill sets that I would need to pursue a career in web
                                        development.
                                        Over the years, I have kept my skills sharp by volunteering in my community and local
                                        school. I
                                        also work part-time as a substitue teacher as I am an advocate of education and
                                        life-long learning.
                                    
                                    Before moving to New Hamshire, I studied at Drexel University where I received a BA in
                                                Marketing,
                                                which I later used to help manage our family business. I subsequently applied it to my
                                                own business.
                                    
                                    As a former intrepreneur, I understand the importance of delivering amazing results with
                                                        exceptional
                                                        customer service. I have collaborated with clients to learn their story, and use
                                                        innovative design
                                                        thinking to help design a product that they are excited about. I am passionate about
                                                        designing, and am
                                                        eager to contribute my artistic talent, and the skills I have gained from my web
                                                        development course
                                                        in the IT world. Thank you for visiting my site.
                                          
                                    </p>
                                </div>
                
                            </div>
                        </div>
                    </div>
        )
    }
}