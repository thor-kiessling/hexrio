import './App.css';
import React from 'react';
import Nav2 from './Nav2.js';
import { createVendiaClient } from '@vendia/client';

// DMV Node apiUrl/websocketUrl/apiKey
const client = createVendiaClient({
    apiUrl: `https://9d1xmdp3qi.execute-api.us-west-1.amazonaws.com/graphql/`,
    websocketUrl: `wss://hf9yone16h.execute-api.us-west-1.amazonaws.com/graphql`,
    apiKey: 'FGKpSz5kkXeyAyPDGvBDbni4buusHUsq6K2u2axykcUn', // <---- API key
});

const { entities } = client;

function DataEntry() {
    // add a new citizen
    const add = async () => {
        const addResponse = await entities.citizen.add({
            firstName: "hank",
            lastName: "hill",
            dl: 1234567,
            dob: "12/1/1965",
            passportNum: 2345678,
            passportExp: "12/1/2024",
            socialSecurityNum: 675250578,
        });
        console.log(addResponse);
    }

    // submit button doesn't add ssn to entity yet
    function handleSubmit (event) {
        event.preventDefault();
        add();
    }

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
                <SSN/>
                <button onClick={handleSubmit}>Submit</button>
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

// modified SSN component to hide input and show it with the eye button
class SSN extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            hidden: true,
        };

        this.toggleHide = this.toggleHide.bind(this);
    }

    toggleHide() {
        this.setState({ hidden: !this.state.hidden });
    }

    render() {
        return (
            <div style={{display: "flex"}}>
                <input
                    type={this.state.hidden ? 'password' : 'text'}
                    placeholder="Enter citizen's SSN"
                />
                <button
                    style={{marginRight: "auto"}}
                    onClick={this.toggleHide}>👁
                </button>
            </div>
        );
    }
}


export default DataEntry;



