import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Help from "./Help";
import DataEntry from "./DataEntry";
import About from "./About";
import DataDisplay from "./DataDisplay"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Router>
          <Routes>

              <Route path="/" element={<App/>} />
              <Route path="/Help" element={<Help/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/DataEntry" element={<DataEntry/>} />
              <Route path='/DataDisplay' element={<DataDisplay/>} />


          </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
