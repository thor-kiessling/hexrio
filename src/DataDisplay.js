import './App.css';
import React from 'react';
import Nav2 from './Nav2.js';
import { useLocation } from "react-router-dom";
import { createVendiaClient } from '@vendia/client';

// DMV Node apiUrl/websocketUrl/apiKey
const client = createVendiaClient({
    apiUrl: `https://rhpsthbngc.execute-api.us-west-1.amazonaws.com/graphql/`,
    websocketUrl: `wss://phqj0olq59.execute-api.us-west-1.amazonaws.com/graphql`,
    apiKey: 'BH7U5toxb4qPcdDa1yNd2ab1riZ9xkfP3cGtU5VAz79c', // <---- API key
});

const { entities } = client;

const DataDisplay = () => {

    // Store data from SearchBar
    const location = useLocation();
    const ssn = location.state.ssn;
    console.log("SSN:", ssn);

    // const responseAsync fixes an issue with a webpackage
    const responseAsync = async () => {
        return await entities.citizen.list(
            {
                filter: {
                    socialSecurityNum:  {
                        eq: parseInt(ssn, 10),
                    },

                },
            }
        );
    }
     console.log(responseAsync());

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