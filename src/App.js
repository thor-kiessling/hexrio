import './App.css';
import React from 'react';
import Nav2 from './Nav2.js';
import SearchBar from './SearchBar.js';
import AppBodyPlus from './AppBodyPlus.js'
import AppFooter from './AppFooter.js'

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

                <div className="App-body">
                    <SearchBar />
                </div>

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



