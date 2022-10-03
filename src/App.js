import './App.css';

import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Seal_of_the_U.S._Department_of_Homeland_Security.svg/1280px-Seal_of_the_U.S._Department_of_Homeland_Security.svg.png" alt="DHS Logo" width="300"></img></div>
        U.S. Citizenship and <br></br>Immigration Services
      </header>
      <footer className="App-footer">
        <br></br>
        <body>
    
          <input type="text" placeholder="Enter your SSN" style={{ float: "left", display: "inline" }}></input>
          <SSN value="🔍" style={{ float: "right", display: "inline" }} />
          <SSN value="👁" style={{ float: "right", display: "inline" }} />
          
        </body>
        
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <p>Why do I have to enter my SS#?</p>
        <p>
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
