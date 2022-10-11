import './App.css';
import React from 'react';

function App() {
        return (


            <div className="App">

                <div className="App-navigation">
                    <a href="./"><img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="400"></img></a>


                    <div className="nav2">
                        <a href="./Help" className="button">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIaOdsZm0MOEw4Gisgm2D910hdg6Ebr_FkfCG9IzIKp4yGs6m4qHY7CbW420hp2BPxf0&usqp=CAU"
                                width="20" height="20"></img>Help </a>
                        <a href="/" className="button">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" width="17"
                                 height="17"></img> Home </a>
                        <a href='/About' className="button">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png"
                                width="15" height="15"></img>About</a>
                        <a href='/DataEntry' className="button">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png"
                                width="15" height="15"></img>Data Entry</a>

                    </div>
                </div>

                <header className="App-header">
                    <img src="https://www.uscis.gov/sites/default/files/images/article-history/SealsSignatures_USCIS%402x.png" alt="DHS Logo" width="500"></img>
                </header>

                <body className="App-body">
                <input type="text" placeholder="Enter your SSN"></input>
                <SSN value="👁"/>
                <SSN value="🔍"/>
                </body>

                <div className="App-body-plus">
                    🛡️ Please do not share your SS# with anyone other than yourself
                    <br></br>
                    ✓ Government sanctioned for your security

                </div>

                <footer className="App-footer">

                    <p>
                        Why do I have to enter my SS#?
                        <br></br><br></br>
                        This service allows you to retrieve crucial information that would verify your identity.
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


export default App;



