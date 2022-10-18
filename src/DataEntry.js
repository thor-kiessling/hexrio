import './App.css';
import React from 'react';
import Nav2 from './Nav2.js';

function DataEntry() {
    return (


        <div className="DataEntry">

            <div className="DataEntry-navigation">
                <img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="400"></img>


                <Nav2 />
            </div>

            <header className="DataEntry-header">
                <img src="https://www.uscis.gov/sites/default/files/images/article-history/SealsSignatures_USCIS%402x.png" alt="DHS Logo" width="500"></img>
            </header>

            <body className="DataEntry-body">
            <input type="text" placeholder="Enter your SSN"></input>
            <SSN value="👁"/>
            <SSN value="🔍"/>
            </body>

            <div className="DataEntry-body-plus">
                Enter new DMV, Social Security,and State Department information here
                <br></br>
                Unauthorized use prohibited;

            </div>

            <footer className="DataEntry-footer">

                <p>

                    <br></br><br></br>
                    This service allows you to input crucial information that will verify your identity.
                    This works in collaboration with databases from the DMV, Social Security Department, and
                    Department of State.
                </p>
            </footer>

        </div>



    );
}

class SSN extends React.Component {
    render() {
        return (
            <div style={{display: "flex"}}>
                <button
                    style={{marginRight: "auto"}}

                >
                    {this.props.value}

                </button>
            </div>
        )
    }
}


export default DataEntry;



