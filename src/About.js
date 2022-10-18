import './App.css';
import React from 'react';
import Nav2 from './Nav2.js';

// styling
const descrStyle = {
    color: "white",
    fontSize: "40px",
    textAlign: "center"
}

const About = () => {
    return (
        <div>

            <div className="App-navigation">
                <img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="400"></img>


                <Nav2 />
            </div>
            <div>
            </div>
            <div>
                <body className= "About-body">


                <p fontSize style={descrStyle}>{'\tAbout Us'}</p>

                </body>
            </div>
            <div>
                <footer className="About-footer">
                </footer>
            </div>


        </div>
    );
};

export default About;
