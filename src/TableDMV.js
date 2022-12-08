import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createVendiaClient } from '@vendia/client';

function createData(firstName, lastName, dl, photo, dob) {
  return { firstName, lastName, dl, photo, dob };
}

const rows = [
//createData('Name', firstname, lastname),
  createData('Name:', 'Kevin', 'Wong'),
  createData('DL:', 'A1234567'),
  createData('Photo:', 'Insert Photo Through Vendia'),
  createData('DOB:', '07/10/2001'),
];

export default function TableDMV() {

  return (
    <TableContainer component={Paper}>
      <Table size="small" style={{ width: 100, height: 50 }}>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              style={{ background: 'white' }}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{ background: 'white' }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ background: 'white' }} align="right">{row.firstName}</TableCell>
              <TableCell style={{ background: 'white' }} align="right">{row.lastName}</TableCell>
              <TableCell style={{ background: 'white' }} align="right">{row.dl}</TableCell>
              <TableCell style={{ background: 'white' }} align="right">{row.photo}</TableCell>
              <TableCell style={{ background: 'white' }} align="right">{row.dob}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}