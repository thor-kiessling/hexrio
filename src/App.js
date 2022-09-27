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
