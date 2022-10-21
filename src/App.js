import './App.css';
import React from 'react';
import Nav2 from './Nav2.js';
import SearchBar from './SearchBar.js';
import AppBodyPlus from './AppBodyPlus.js'
import AppFooter from './AppFooter.js'
import { createVendiaClient } from '@vendia/client';

// DMV Node apiUrl/websocketUrl/apiKey
const client = createVendiaClient({
    apiUrl: `https://9d1xmdp3qi.execute-api.us-west-1.amazonaws.com/graphql/`,
    websocketUrl: `wss://hf9yone16h.execute-api.us-west-1.amazonaws.com/graphql`,
    apiKey: 'FGKpSz5kkXeyAyPDGvBDbni4buusHUsq6K2u2axykcUn', // <---- API key
});

const { entities } = client;

function App() {

        return (


            <div className="App">

                <div className="App-navigation">
                    <a href="./"><img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="300"></img></a>
                    <Nav2 />
                </div>

                <header className="App-header">
                    <img src="https://www.uscis.gov/sites/default/files/images/article-history/SealsSignatures_USCIS%402x.png" alt="DHS Logo" width="350"></img>
                </header>

                <body className="App-body">
                    <SearchBar />
                </body>

                <div className="App-body-plus">
                        <AppBodyPlus />
                </div>

                <footer className="App-footer">
                        <AppFooter />
                </footer>

            </div>



        );
    }
export default App;



