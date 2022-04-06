import React from 'react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


function createData(Name, Email, phone, Contact_Owner) {
  return { Name, Email, phone, Contact_Owner };
 }
   
 const rows = [
  createData("Sudha", "sudhamca369@gmail.com", 9027286930, "Sudha" ),
  createData("Kajal", "kk1@gmail.com", 9058748592, "Kajal" ),
  createData("Prakash", "ps@gmail.com", 9888808592, "Sudha" ),
  createData("Pratiksha", "pk051@gmail.com", 9777777092, "Prakash" ),
  
 ];


 export default function Demo() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">Contact_Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Name}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.Contact_Owner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
 }
 