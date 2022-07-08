import React,{useState} from 'react';
//Material UI Imports
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateIcon from '@mui/icons-material/Update';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//Component Imports
import { dataDelete } from '../../Data/dataDelete';
import { GetData } from '../../Data/getData';
import { FlightFormsOnClick } from '../../OtherFunctions/FlightFormsOnClick';



//Style Table for Flights
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
  const[data, setData] = useState();
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

      const handleUpdate = (key,data) => {
        setFormID("Update")
        setIdRef(key)
        setData(data)
        
       
        }

        const handleAdd = () =>
        {
          setFormID("Add")
        }

        const assignPassenger = (key,pass,limit,data) =>{
          let cap = limit-pass;
         
          if(cap<=0){
            alert("this flight is full");
          
                    }else{
          setFormID("Assign")
          setIdRef(key)
          setData(data)

                    }
         
         
                    }  
        


   
    

     
      
        //Render Table to Page

  return (

<>
                      

    {/*-----Table*/}
    <section> 
    <Button variant="contained" 
                                color="success" 
                                align="center"
                                size="30%" 
                                onClick={()=>{handleAdd()}}
                                startIcon={<MdIcons.MdFlight/>} >Add Flight</Button>
       <TableContainer component={Paper}>
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

                    <StyledTableCell align="right">{flight.passengers.length}/{parseInt(flight.passengerLimit)}</StyledTableCell>
                    <StyledTableCell align="right">
                        <Button variant="contained" 
                                color="error" 
                                size="30%" 
                                onClick={()=>{handleDelete(flight.flightNumber)}}
                                startIcon={<DeleteOutlineIcon/>}   >Delete</Button>
                    
                        <Button variant="contained" size="30%"
                        onClick={()=>{handleUpdate(flight._id,flight)}} startIcon={<UpdateIcon/>}>Update</Button>
                        
                         <Button variant="contained" 
                                color="success" 
                                size="30%" 
                                onClick={()=>{assignPassenger(flight._id,flight.passengers.length,flight.passengerLimit,flight)}}
                                startIcon={<BsIcons.BsFillPeopleFill/>} >Assign</Button>
                      </StyledTableCell>
                  </StyledTableRow>
              
              
            </TableBody>
            </React.Fragment>
             )})}

                    </Table>
                  
                    </TableContainer>
                    <br></br>
        
        <FlightFormsOnClick state={FormID} document={IdRef} data={data}/>
         </section> 
         {/*-----End*/}

</>

  )}


           
       
       
  