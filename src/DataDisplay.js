import './App.css';
import React from 'react';
import Nav2 from './Nav2.js';
import { useLocation } from "react-router-dom";
import { createVendiaClient } from '@vendia/client';
import { DataGrid } from '@mui/x-data-grid'
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Match from './Match.js'
import Invalid from './Invalid.js'



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

    // DMV Call
    // Returns citizen from DMV
    const responseAsyncDMV = async () => {
      return await entities.citizen.list(
          {
              filter: {
                  socialSecurityNum:  {
                      eq: parseInt(ssn, 10),
                  },
                  _owner:  {
                    eq: 'DMV',
                },

              },
              
          }            
      )
  } 

  const [tableDataDMV, setTableDataDMV] = useState([])

  useEffect(() => {
    responseAsyncDMV().then(data=>
       setTableDataDMV(data)
    );
    }, []);

    // SS Call
    // Returns citizen from SS
    const responseAsyncSS = async () => {
      return await entities.citizen.list(
          {
              filter: {
                  socialSecurityNum:  {
                      eq: parseInt(ssn, 10),
                  },
                  _owner:  {
                    eq: 'SS',
                },

              },
              
          }            
      )
  } 

  const [tableDataSS, setTableDataSS] = useState([])

  useEffect(() => {
    responseAsyncSS().then(data=>
       setTableDataSS(data)
    );
    }, []);

    // DOS Call
    // Returns citizen from DOS
    const responseAsyncDOS = async () => {
      return await entities.citizen.list(
          {
              filter: {
                  socialSecurityNum:  {
                      eq: parseInt(ssn, 10),
                  },
                  _owner:  {
                    eq: 'DOS',
                },

              },
              
          }            
      )
  } 

  const [tableDataDOS, setTableDataDOS] = useState([])

  useEffect(() => {
    responseAsyncDOS().then(data=>
       setTableDataDOS(data)
    );
    }, []);


    const CheckResults=()=>{
      if (tableDataDMV.items[0].dob === tableDataDOS.items[0].dob &&
          tableDataDMV.items[0].firstName === tableDataDOS.items[0].firstName &&
          tableDataDMV.items[0].lastName === tableDataDOS.items[0].lastName &&
          tableDataDMV.items[0].passportExp === tableDataDOS.items[0].passportExp &&
          tableDataDMV.items[0].passportNum === tableDataDOS.items[0].passportNum &&
          tableDataDMV.items[0].dob === tableDataSS.items[0].dob &&
          tableDataDMV.items[0].firstName === tableDataSS.items[0].firstName &&
          tableDataDMV.items[0].lastName === tableDataSS.items[0].lastName &&
          tableDataDMV.items[0].passportExp === tableDataSS.items[0].passportExp &&
          tableDataDMV.items[0].passportNum === tableDataSS.items[0].passportNum &&
          tableDataDOS.items[0].dob === tableDataSS.items[0].dob &&
          tableDataDOS.items[0].firstName === tableDataSS.items[0].firstName &&
          tableDataDOS.items[0].lastName === tableDataSS.items[0].lastName &&
          tableDataDOS.items[0].passportExp === tableDataSS.items[0].passportExp &&
          tableDataDOS.items[0].passportNum === tableDataSS.items[0].passportNum)
          {
            return (
                <Match/>
            );
          }
          else {
            return (
              <Invalid/>
            )
          }
    }

    console.log(tableDataDMV.items);
    console.log(tableDataDOS.items);
    console.log(tableDataDOS.items);


     if (tableDataDMV.items !== undefined && tableDataSS.items !== undefined && tableDataDOS.items !== undefined) {
    return (
 
        <div>

        <div className="App-navigation">
            <a href="./"><img src="https://www.uscis.gov/sites/default/files/images/site/DHS_cis_W.svg" alt="DHS Logo" width="300"></img></a>
            <Nav2 />
        </div>

        <header className="App-datadisplayheader">
                    <img src="https://www.uscis.gov/sites/default/files/images/article-history/SealsSignatures_USCIS%402x.png" alt="DHS Logo" width="350" ></img>
                    <Stack direction="column" spacing={3} justifyContent="flex-end">
                    <Typography
                          variant='h1'
                          style={{fontSize: 40, fontFamily: 'Merriweather', background: 'white', color: 'black' }}
                          align='center'
                          sx={{ fontWeight: 'bold', paddingTop: 3, paddingBottom: 3 }}
                          >
                            {ssn}
                            </Typography>
                            </Stack>
        </header>
        <div>
          {/*<Match />*/}
          <CheckResults />
        </div>
  
        <div className="datadisplay">         

        </div>
        <div>
          
          <Stack direction="rows" spacing={1} justifyContent="flex-end">
          <div style={{ height: 700, width: '80%', background: 'white' }}>
          <Typography
            variant='h1'
            style={{fontSize: 27, fontFamily: 'Merriweather', background: 'white', color: '#004073' }}
            align='center'
            sx={{ fontWeight: 'bold', paddingBottom: 5 }}
            >
              Department of Motor Vehicles
            </Typography>
            <DataGrid 
              hideFooterPagination
              hideFooterSelectedRowCount
              rows={tableDataDMV.items}
              columns={columnsDMV}
              getRowId={(row) => row._id}
              style={{ background: 'white', fontFamily: 'Merriweather', fontSize: 13 }}
              align= 'center'
              sx={{ paddingLeft: 1, borderColor: 'white' }}
            />
            
          </div>
          <div style={{ height: 700, width: '100%', background: 'white' }}>
          <Typography
        variant='h1'
        style={{fontSize: 27, fontFamily: 'Merriweather', background: 'white', color: '#004073', width: '100%' }}
        align='center'
        sx={{ fontWeight: 'bold', paddingBottom: 5, paddingLeft: 6 }}
        >
          Social Security Administration
        </Typography>
            <DataGrid   
              hideFooterPagination
              hideFooterSelectedRowCount           
              rows={tableDataSS.items}
              columns={columnsSS}
              getRowId={(row) => row._id}
              style={{ background: 'white', fontFamily: 'Merriweather', fontSize: 13, width: '90%' }}
              align='center'
              sx={{ paddingLeft: 1, borderColor: 'white', paddingLeft: 17 }}     
            />
            
          </div>
          <div style={{ height: 700, width: '100%', background: 'white' }}>
          <Typography
        variant='h1'
        style={{fontSize: 27, fontFamily: 'Merriweather', background: 'white', color: '#004073' }}
        align='center'
        sx={{ fontWeight: 'bold', paddingBottom: 5 }}
        >
          Department of State
        </Typography>
            <DataGrid     
              hideFooterPagination
              hideFooterSelectedRowCount         
              rows={tableDataDOS.items}
              columns={columnsDOS}
              getRowId={(row) => row._id}
              style={{ background: 'white', fontFamily: 'Merriweather', fontSize: 13 }}
              sx={{ borderColor: 'white', paddingLeft: 2 }}
            />
            
          </div>
          </Stack>
            
        </div>
        </div>

        

    );
     }
};



const columnsDMV = [
  { field: 'firstName', headerName: 'First Name', headerAlign: 'center', align: 'center' },
  { field: 'lastName', headerName: 'Last Name', headerAlign: 'center', align: 'center' },
  { field: 'dl', headerName: 'DL Number', type: 'string', headerAlign: 'center', align: 'center' },
  //{ field: 'photo', headerName: 'Photo'},
  { field: 'dob', headerName: 'Date of Birth', headerAlign: 'center', align: 'center' },
]

const columnsSS = [
  { field: 'firstName', headerName: 'First Name', headerAlign: 'center', align: 'center'},
  { field: 'lastName', headerName: 'Last Name', headerAlign: 'center', align: 'center' },
  { field: 'dob', headerName: 'Date of Birth', headerAlign: 'center', align: 'center' },
]

const columnsDOS = [
  { field: 'firstName', headerName: 'First Name', headerAlign: 'center', align: 'center' },
  { field: 'lastName', headerName: 'Last Name', headerAlign: 'center', align: 'center' },
  //{ field: 'photo', headerName: 'Photo'},
  { field: 'dob', headerName: 'Date of Birth', headerAlign: 'center', align: 'center' },
  { field: 'passportNum', headerName: 'Passport', type: 'string', headerAlign: 'center', align: 'center' },
  { field: 'passportExp', headerName: 'Expiration', type: 'string', headerAlign: 'center', align: 'center' },
]

export default DataDisplay;