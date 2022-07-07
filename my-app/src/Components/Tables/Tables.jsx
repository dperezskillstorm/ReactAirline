import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetData } from '../Data/getData';
import Moment from 'moment';
import { bookingNumGenerator } from '../Data/generateBookingNum';
import { axios } from 'axios';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateIcon from '@mui/icons-material/Update';;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export function CustomizedTables() {

    let passengers = GetData("http://localhost:8085/passenger");
    const formatDate = Moment().format('DD-MM-YYYY');
    let bookingNumber = bookingNumGenerator("PEREZ","MCALLEN","06/27/88");
    const handleDelete =  (key) => {
        axios.delete(`http://localhost:8085/passenger/${key}`)
        .then((res)=>{
          if ( res.status === "201"){
            alert("delete succesfully")
          
            this.loadData()
          } else {
            alert("not yet")
          }
        })}



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> Name</StyledTableCell>
         
            <StyledTableCell align="right">BookingNum</StyledTableCell>
            <StyledTableCell align="right">Date OF Birth</StyledTableCell>
            <StyledTableCell align="right">Country Of Origin</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>    
        </TableHead>

        <TableBody>
          {passengers.map((passenger) => (

            <StyledTableRow key={passenger}>
              <StyledTableCell component="th" scope="row">{passenger.lastName}, {passenger.firstName}</StyledTableCell>
              <StyledTableCell align="right">{bookingNumber}</StyledTableCell>
              <StyledTableCell align="right">{passenger.DOB}</StyledTableCell>
              <StyledTableCell align="right">{passenger.countryOfOrigin}</StyledTableCell>
              <StyledTableCell align="right">
              <Button variant="contained" 
                            color="error" 
                            size="30%" 
                            onClick={()=>{handleDelete(passengers._id)}}
                            startIcon={<DeleteOutlineIcon/>}   >Delete</Button>
                   
                    <Button variant="contained" size="30%" startIcon={<UpdateIcon/>}>Update</Button>
              
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
