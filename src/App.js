import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">

      <div className="App-navigation">
        <img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="400"></img>

        <div className="nav2">
          <a href="google.com">🔍 Help</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="google.com">🏠 Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="google.com">ℹ️ About</a>
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
          This works in collaboration with databases from the DMV, Social Security Department, and Department of State.
        </p>
      </footer>

    </div>
  );
}
class SSN extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <button
          style={{ marginRight: "auto" }}

        >
          {this.props.value}

        </button>
      </div>
    )
  }
}

export default App;
