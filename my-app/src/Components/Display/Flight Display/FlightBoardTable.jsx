import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetData } from '../../Data/getData';
//import Moment from 'moment';
import { dataDelete } from '../../Data/dataDelete';
import {useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateIcon from '@mui/icons-material/Update';
import * as BsIcons from 'react-icons/bs';
import {useState} from 'react';
import { FlightFormsOnClick } from '../../OtherFunctions/FlightFormsOnClick';

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



export function FlightBoardTable() {

  const [FormID, setFormID] = useState();
  const [IdRef, setIdRef] = useState();
    // Get Data from DB
    // Flights are being pulled with no problems
    let flights = GetData("http://localhost:8085/flight/");


    //const formatDate = Moment().format('DD-MM-YYYY');


    //Handle Delete Buttom
    const handleDelete =  (key) => {
      dataDelete(`http://localhost:8085/flight/${key}`)
      console.log(`the key is ${key}`)
      window.location.reload()
      
      }

      const handleUpdate = (key) => {
        setFormID("Update")
        setIdRef(key)
        
       
        }

        const assignPassenger = (key) =>{
          setFormID("Assign")
          IdRef(key)
         
          
        }



   
    

     
      
        //Render Table to Page

  return (


<>


    {/*-----Table*/}
    <section>    <TableContainer component={Paper}>
    <button>Add flight</button>
      <Table sx={{  }} aria-label="customized table" align="center">
        <TableHead>
          <TableRow>
            <StyledTableCell> Flight Number</StyledTableCell>
         
            
            <StyledTableCell align="right">Arrival Airport </StyledTableCell>
            <StyledTableCell align="right">Arrival DateTime</StyledTableCell>
            <StyledTableCell align="right">Departure Airport</StyledTableCell>
            <StyledTableCell align="right">Departure DateTime</StyledTableCell>
            <StyledTableCell align="right">Boarded/Capacity</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>    
        </TableHead>
              {flights.map(flight=>{
                return(
                  <React.Fragment key={flight.flightNumber}>
            <TableBody>

               
                  <StyledTableRow key={flight}>
                    <StyledTableCell component="th" scope="row">{flight.flightNumber}</StyledTableCell>
                    <StyledTableCell align="right">{flight.arrivalAirport}</StyledTableCell>
                    <StyledTableCell align="right">{flight.arrivalDate}</StyledTableCell>
                    <StyledTableCell align="right">{flight.departureAirport}</StyledTableCell>
                    <StyledTableCell align="right">{flight.departureDate}</StyledTableCell>

                    <StyledTableCell align="right">{flight.currentPassengers}/{flight.passengerLimit}</StyledTableCell>
                    <StyledTableCell align="right">
                        <Button variant="contained" 
                                color="error" 
                                size="30%" 
                                onClick={()=>{handleDelete(flight.flightNumber)}}
                                startIcon={<DeleteOutlineIcon/>}   >Delete</Button>
                    
                        <Button variant="contained" size="30%"
                        onClick={()=>{handleUpdate(flight._id)}} startIcon={<UpdateIcon/>}>Update</Button>
                        
                         <Button variant="contained" 
                                color="success" 
                                size="30%" 
                                onClick={()=>{assignPassenger(flight._id)}}
                                startIcon={<BsIcons.BsFillPeopleFill/>} >Assign</Button>
                      </StyledTableCell>
                  </StyledTableRow>
              
              
            </TableBody>
            </React.Fragment>
             )})}

                    </Table>
                  
                    </TableContainer>
                    <br></br>
        
        <FlightFormsOnClick state={FormID} document={IdRef} />
         </section>
         {/*-----End*/}

</>

  )}


           
       
       
  