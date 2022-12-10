import './App.css';
import React from 'react';
import Nav2 from './Nav2.js';
import EntryBar from './EntryBar.js';
import AppBodyPlus from './AppBodyPlus.js'
import AppFooter from './AppFooter.js'

function DataEntry(entities) {
    let ret = "DataEntry"
    ret += JSON.stringify(entities)
    // alert(ret)
    // alert (JSON.stringify(entities.citizen.list))
    return (
        <div className="DataEntry">

            <div className="DataEntry-navigation">
                <a href="./"><img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="300"></img></a>
                <Nav2 />
            </div>

            <header className="DataEntry-header">
                <img src="https://www.uscis.gov/sites/default/files/images/article-history/SealsSignatures_USCIS%402x.png" alt="DHS Logo" width="350"></img>
            </header>

            <div className="DataEntry-body">

                <EntryBar {...entities}/>
            </div>

            <div className="DataEntry-body-plus">
                <AppBodyPlus />
            </div>

            <footer className="DataEntry-footer">
                <AppFooter />
            </footer>

        </div>



    );
}

export default DataEntry;



