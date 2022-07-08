import React from 'react'
import Box from '@mui/material/Box';
import { FlightBoardTable } from '../Components/Display/Flight Display/FlightBoardTable';


   


function Flights() {

  
  return (
    <div className="HomePage">
      <div>
    <h1>Flights</h1>
    <Box  m={5}
 //margin
  display="flex"
  justifyContent="flex-center"
  alignItems="flex-center"
  
    
    
    ></Box>
    <FlightBoardTable/>
    


</div>
   
</div>
  
   
    
  )
}

export default Flights

