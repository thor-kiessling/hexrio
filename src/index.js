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
import {createVendiaClient} from "@vendia/client";

// DMV Node apiUrl/websocketUrl/apiKey
const client = createVendiaClient({
    apiUrl: `https://rhpsthbngc.execute-api.us-west-1.amazonaws.com/graphql/`,
    websocketUrl: `wss://phqj0olq59.execute-api.us-west-1.amazonaws.com/graphql`,
    apiKey: 'BH7U5toxb4qPcdDa1yNd2ab1riZ9xkfP3cGtU5VAz79c', // <---- API key
});
const {entities} = client
let ret = "Index"
ret += JSON.stringify(entities)
// alert(ret)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Router>

          <Routes>

              <Route path="/" element={<App/>} />
              <Route path="/Help" element={<Help/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/DataEntry" element={<DataEntry entities={{entities}} />} />
              <Route path='/DataDisplay' element={<DataDisplay/>} />


          </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
