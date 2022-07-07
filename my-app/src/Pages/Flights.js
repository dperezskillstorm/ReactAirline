import React from 'react'
import { PassengerBoardTable } from '../Components/Display/Flight Display/PassengerBoardTable'
import {GetData} from '../Components/Data/getData'
import { Button } from '@mui/material';
import * as BsIcons from 'react-icons/bs';
import Box from '@mui/material/Box';
import {useState} from 'react';
import { FlightFormsOnClick } from '../Components/OtherFunctions/FlightFormsOnClick';
import * as MdIcons from 'react-icons/md'; 
import { FlightBoardTable } from '../Components/Display/Flight Display/FlightBoardTable';


   


function Flights() {

  let [addButtonClicked, setAddButtonClicked] = useState();
  
  
  const showForm = (form) => {
    setAddButtonClicked(form)
    console.log(addButtonClicked) }
   
            
       

  
  const flights = GetData("http://localhost:8085/flights/");

  const renderForm=()=>{

  }

  return (
    <div className="HomePage">
      <div>
    <h1>Flights</h1>
    <Box  m={5}
 //margin
  display="flex"
  justifyContent="flex-center"
  alignItems="flex-center"
  
    
    
    ><Button variant="contained" 
                                color="success" 
                                align="center"
                                size="30%" 
                                onClick={()=>{showForm("Add")}}
                                startIcon={<MdIcons.MdFlight/>} >Add Flight</Button>
                                <Button variant="contained" 
                                color="info" 
                                align="center"
                                size="30%" 
                                onClick={()=>{showForm("Update")}}
                                startIcon={<MdIcons.MdFlight/>} >Update Flight</Button></Box>
    <FlightBoardTable/>
    


</div>
   
</div>
  
   
    
  )
}

export default Flights

