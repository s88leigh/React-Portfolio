import React, { Component } from 'react'
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col l6 s12"> */}
                                {/* <h5 className="white-text">Footer Content</h5> */}
                                {/* <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
                            {/* </div> */}
                            <div className="col 12 s12">


                                <a className="grey-text text-lighten-3" href="#!">Linkedin </a>
                                <a className="grey-text text-lighten-3" href="#!">GitHub </a>
                                <a className="grey-text text-lighten-3" href="#!">Contact</a>

                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2020 Copyright
                        {/* <a className="grey-text text-lighten-4 " href="#!"></a> */}
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}

