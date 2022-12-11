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
const DMVclient = createVendiaClient({
    apiUrl: `https://rhpsthbngc.execute-api.us-west-1.amazonaws.com/graphql/`,
    websocketUrl: `wss://phqj0olq59.execute-api.us-west-1.amazonaws.com/graphql`,
    apiKey: 'BH7U5toxb4qPcdDa1yNd2ab1riZ9xkfP3cGtU5VAz79c', // <---- API key
    localNodeName: 'DMV',
});
// DOS Node apiUrl/websocketUrl/apiKey
const DOSclient = createVendiaClient({
    apiUrl: `https://jixdzstoj4.execute-api.us-west-1.amazonaws.com/graphql/`,
    websocketUrl: `wss://dl9p0kj4na.execute-api.us-west-1.amazonaws.com/graphql`,
    apiKey: '7DrwoY2UQDxWVx2CSr79StJh2zB6Y6PcqtAgxox2fjSk', // <---- API key
    localNodeName: 'DOS'
});
// SS Node apiUrl/websocketUrl/apiKey
const SSclient = createVendiaClient({
    apiUrl: `https://rhpsthbngc.execute-api.us-west-1.amazonaws.com/graphql/`,
    websocketUrl: `wss://phqj0olq59.execute-api.us-west-1.amazonaws.com/graphql`,
    apiKey: '7xoZqZUx9MNY5Ycaebw8mobyur9iHDRp2VApPceNDgh', // <---- API key
    localNodeName: 'SS'
});
const clients = {DMVclient, DOSclient, SSclient}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <Router>

            <Routes>

                <Route path="/" element={<App/>}/>
                <Route path="/Help" element={<Help/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/DataEntry" element={<DataEntry clients={{clients}}/>}/>
                <Route path='/DataDisplay' element={<DataDisplay/>}/>


            </Routes>
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
