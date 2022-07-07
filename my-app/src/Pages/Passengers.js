
import React from 'react'
import { PassengerBoardTable } from '../Components/Display/Flight Display/PassengerBoardTable'
import {GetData} from '../Components/Data/getData'
import { Button } from '@mui/material';
import * as BsIcons from 'react-icons/bs';
import Box from '@mui/material/Box';
import {useState} from 'react';
import { PassengerFormsOnClick } from '../Components/OtherFunctions/PassengerFormsOnClick';


   


function Passengers() {

  let [addButtonClicked, setAddButtonClicked] = useState();
  
  
  const showForm = (form) => {
    setAddButtonClicked(form)
    console.log(addButtonClicked) }
   
            
       

  
  const passenger = GetData("http://localhost:8085/passenger/");

  const renderForm=()=>{

  }

  return (
    <div className="HomePage">
      <div>
    <h1>Passengers</h1>
 
    <PassengerBoardTable/>
    <br></br>
    


</div>
   
</div>
  
   
    
  )
}

export default Passengers

