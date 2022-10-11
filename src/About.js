import './App.css';
import React from 'react';

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


                <div className="nav2">

                    <a href="./Help" class="button" >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIaOdsZm0MOEw4Gisgm2D910hdg6Ebr_FkfCG9IzIKp4yGs6m4qHY7CbW420hp2BPxf0&usqp=CAU" width="20" height="20"></img>Help </a>
                    <a href="/" class="button">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" width="17" height="17"></img> Home </a>
                    <a href='./About' class="button">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" width="15" height="15"></img>About</a>
                    <a href='/DataEntry' className="button">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png"
                            width="15" height="15"></img>Data Entry</a>

                </div>
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
