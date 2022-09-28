import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Made by Thor, James, Kevin, Legna, Tim, and Austin.
        </p>
        <input type="text" placeholder="Enter your SSN"></input>
        <SSN value = "submit ssn"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <footer>
        <p>Why do I have to enter my SS#?</p>
        <p>
          This service allows you to retrieve crucial information that would verify your identity.
          This works in collaboration with databases from the DMV, Social Security Department, and Department of State.
        </p>
      </footer>
    </div>
  );
}
class SSN extends React.Component{
  render(){
    return < button >
      {this.props.value}
    </button>
  }
}

export default App;
