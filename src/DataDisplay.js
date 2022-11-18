import './App.css';
import React from 'react';
import Nav2 from './Nav2.js';

const DataDisplay = () => {

    return (
        <div>

        <div className="App-navigation">
            <a href="./"><img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="300"></img></a>
            <Nav2 />
        </div>

        <div className="App-white-body">

        </div>
        </div>

    );
};

export default DataDisplay;