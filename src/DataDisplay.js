import './App.css';
import React from 'react';
import Nav2 from './Nav2.js';
//import TableDMV from './TableDMV.js';
import { useLocation } from "react-router-dom";
import { createVendiaClient } from '@vendia/client';
import { DataGrid } from '@mui/x-data-grid'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';



// DMV Node apiUrl/websocketUrl/apiKey
const client = createVendiaClient({
    apiUrl: `https://rhpsthbngc.execute-api.us-west-1.amazonaws.com/graphql/`,
    websocketUrl: `wss://phqj0olq59.execute-api.us-west-1.amazonaws.com/graphql`,
    apiKey: 'BH7U5toxb4qPcdDa1yNd2ab1riZ9xkfP3cGtU5VAz79c', // <---- API key
});

// Create 2 more clients for SS and DOS or whatever they're called

const { entities } = client;



const DataDisplay = () => {

    // Store data from SearchBar
    const location = useLocation();
    const ssn = location.state.ssn;
    console.log("SSN:", ssn);

    // const responseAsync fixes an issue with a webpackage
    const responseAsync = async () => {
        return await entities.citizen.list(
            {
                filter: {
                    socialSecurityNum:  {
                        eq: parseInt(ssn, 10),
                    },

                },
                
            }            
        )
    }
     console.log(responseAsync());

     const [tableData, setTableData] = useState(responseAsync())
     
     useEffect(() => {
     responseAsync().then(response=>
        setTableData(response)
     );
     }, []);
     //console.log(tableData.items[0].firstName);
     console.log(tableData);
     console.log(tableData.items);
     
    

     //console.log(items);

    return (
 
        <div>

        <div className="App-navigation">
            <a href="./"><img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="300"></img></a>
            <Nav2 />
        </div>

        <div className="App-white-body">         

        </div>
        <div>
          {/*<TableDMV/>*/}
          <div style={{ height: 700, width: '30%', background: 'white', fontFamily: 'Merriweather' }}>
            <DataGrid
              rows={tableData}
              columns={columns}
              getRowId={(row) => row._id}
              style={{ background: 'white' }}
            />
    </div>
            
        </div>
        </div>

        

    );
};


// DMV Data

const columns = [
  { field: 'firstName', headerName: 'First Name' },
  { field: 'lastName', headerName: 'Last Name'},
  { field: 'dl', headerName: 'DL Number', type: 'string'},
  //{ field: 'photo', headerName: 'Photo'},
  { field: 'dob', headerName: 'Date of Birth'},
]



/*function TableDMV() {
  return (
    
  );

}


function TableDMV() {

  function createData(firstName, lastName, dl, photo, dob) {
    return { firstName, lastName, dl, photo, dob };
  }

  const rows = [
  //createData('Name', firstname, lastname),
    createData('Name:', firstName, lastName),
    createData('DL:', dl),
    createData('Photo:', 'Insert Photo Through Vendia'),
    createData('DOB:', dob),
    //createData('Name:', 'Kevin', 'Wong'),
    //createData('DL:', 'A1234567'),
    //createData('Photo:', 'Insert Photo Through Vendia'),
    //createData('DOB:', '07/10/2001'),
  ];

  const dataRows = [];
 tableData.forEach((item, i) => {
    dataRows.push(createData(items.firstName, items.lastName, items.dl, items.dob));
 });




  return (
    <TableContainer component={Paper}>
      <Table size="small" style={{ width: 100, height: 50 }}>
        <TableBody>
          {dataRows.map((row) => (
            <TableRow
              key={row.name}
              style={{ background: 'white' }}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{ background: 'white' }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ background: 'white' }} align="right">{dataRows.firstName}</TableCell>
              <TableCell style={{ background: 'white' }} align="right">{dataRows.lastName}</TableCell>
              <TableCell style={{ background: 'white' }} align="right">{dataRows.dl}</TableCell>
              <TableCell style={{ background: 'white' }} align="right">{dataRows.photo}</TableCell>
              <TableCell style={{ background: 'white' }} align="right">{dataRows.dob}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}*/


export default DataDisplay;
