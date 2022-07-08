import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetData, GetDataById } from '../../Data/getData';
//import Moment from 'moment';
import { dataDelete } from '../../Data/dataDelete';
import { PassengerFormsOnClick } from '../../OtherFunctions/PassengerFormsOnClick';
import * as BsIcons from 'react-icons/bs';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UpdateIcon from '@mui/icons-material/Update';import { useState } from 'react';

;

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


export function PassengerBoardTable() {


    // Get Data from DB
    // Flights are being pulled with no problems

    let passengers = GetData("http://localhost:8085/passenger/");
  

    let [formKey, setFormKey] = useState('');
    //let [firstName, setFirstName] = useState('');

    let autoPop =GetDataById("http://localhost:8085/passenger/",formKey)

  
    let [FormState, setFormState] = useState();
    let [document, setDocument] = useState();


const handleAdd =()=>{
  setFormState("Add");
}

    const updateHandle = (key) => {
      setFormState("Update");
      setDocument(key);
      

    }

  

    

  
    //const formatDate = Moment().format('DD-MM-YYYY');


    //Handle Delete Buttom
    const handleDelete =  (key) => {
      dataDelete(`http://localhost:8085/passenger/${key}`)
    
      console.log(`the key is ${key}`)
      window.location.reload()
      
      }


        //Render Table to Page
  return (

    <>
    <Box  m={5}
 //margin
  display="flex"
  justifyContent="flex-center"
  alignItems="flex-center"
  
    
    
    ><Button variant="contained" 
                                color="success" 
                                align="center"
                                size="30%" 
                                onClick={()=>handleAdd()}
                                startIcon={<BsIcons.BsFillPeopleFill/>} >AddPassenger</Button>
                               </Box>
    
    <section>    <TableContainer component={Paper}>
      <Table sx={{  }} aria-label="customized table" align="center">
        <TableHead>
          <TableRow>
            <StyledTableCell> First Name</StyledTableCell>
         
            
            <StyledTableCell align="right">Last Name </StyledTableCell>

            <StyledTableCell align="right">Date Of Birth</StyledTableCell>
            <StyledTableCell align="right">Country of Origin</StyledTableCell>
            <StyledTableCell align="right">No of Passengers</StyledTableCell>
            <StyledTableCell align="right">Booking Number</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>    
        </TableHead>
              {passengers.map(passenger=>{
                return(
                  <>
                  <React.Fragment key={passenger.flightNumber}>
            <TableBody>

               
                  <StyledTableRow key={passenger}>
                    <StyledTableCell component="th" scope="row">{passenger.firstName}</StyledTableCell>
                    <StyledTableCell align="right">{passenger.lastName}</StyledTableCell>
                    <StyledTableCell align="right">{passenger.DOB}</StyledTableCell>
                    <StyledTableCell align="right">{passenger.countryOfOrigin}</StyledTableCell>
                    <StyledTableCell align="right">{passenger.NoOfPassengers}</StyledTableCell>
                    <StyledTableCell align="right">{passenger.bookingNumber}</StyledTableCell>
                    <StyledTableCell align="right">



                        <Button variant="contained" 
                                color="error" 
                                size="30%" 
                                onClick={()=>{handleDelete(passenger._id)}}
                                startIcon={<DeleteOutlineIcon/>}   >Delete</Button>
                    
                        <Button variant="contained" 
                         onClick={()=>{updateHandle(passenger._id)}}
                        size="30%" 
                        startIcon={<UpdateIcon/>}>Update</Button>
                      </StyledTableCell>
                  </StyledTableRow>
            </TableBody>
            
            </React.Fragment>

                   
</>
             )})}

                    </Table>
                    </TableContainer>
                    <br/> <br/>
<PassengerFormsOnClick state={FormState} document={document}/>

                
           
                    </section>


                    </>

  )}
            
                


           
       
       
  