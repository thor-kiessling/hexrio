import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">

      <div className="App-navigation">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Seal_of_the_U.S._Department_of_Homeland_Security.svg/1280px-Seal_of_the_U.S._Department_of_Homeland_Security.svg.png" alt="DHS Logo" width="100"></img>
        
        <div className="nav2">
          <a href="google.com">Help </a>
          <a href="google.com">Home </a>
          <a href="google.com">About</a>
        </div>
      </div>

      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Seal_of_the_U.S._Department_of_Homeland_Security.svg/1280px-Seal_of_the_U.S._Department_of_Homeland_Security.svg.png" alt="DHS Logo" width="300"></img>
        <p>U.S. Citizenship and <br></br>Immigration Services</p>
        
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
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </div>

      <footer className="App-footer">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
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
