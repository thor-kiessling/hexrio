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

function App() {

  // This function is called when the search function is clicked
  function handleClick() {
    //console.log("Hello, world!");
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    }

        return (


            <div className="App">

                <div className="App-navigation">
                    <a href="./"><img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="400"></img></a>


                    <Nav2 />
                </div>

                <header className="App-header">
                    <img src="https://www.uscis.gov/sites/default/files/images/article-history/SealsSignatures_USCIS%402x.png" alt="DHS Logo" width="500"></img>
                </header>

                <body className="App-body">
                <SSN/>
                {/*<SSN value="🔍"/>*/}
                <button onClick={handleClick}>🔍</button>
                </body>

                <div className="App-body-plus">
                    🛡️ Please do not share your SS# with anyone other than yourself
                    <br></br>
                    ✓ Government sanctioned for your security

                </div>

                <footer className="App-footer">

                    <p>
                        Why do I have to enter an SSN?
                        <br></br><br></br>
                        This service allows you to retrieve crucial information that would verify the citizen's identity.
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
                    <input type={this.state.hidden ? 'password' : 'text'} placeholder="Enter citizen's SSN" />
                    <button
                        style={{marginRight: "auto"}}
                        onClick={this.toggleHide}>👁
                    </button>
                </div>
            );
        }
    }

export default App;



