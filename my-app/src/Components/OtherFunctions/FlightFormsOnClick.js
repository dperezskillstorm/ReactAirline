
import { AddFlightForm } from '../forms/AddFlightForm';
import { AssignPassenger } from '../forms/AssignPassenger';
import { UpdateFlightForm } from '../forms/UpdateFlightForm';

export const FlightFormsOnClick = (props) =>{

    
    
   let state = props.state;

    console.log(`printing props in flightFormOnClick ${document}`)


    
        if( state === undefined || state==="Add"){
          return (<><h2>Add Flight</h2> <AddFlightForm /> </>)
        
} else if (state==="Update") {
    return(<><h2>Update Flights</h2> <UpdateFlightForm document = {props.document} data={props.data} /></>)
    
} else if (state==="Assign") {
    return(<><h2>Assign Passenger</h2> <AssignPassenger document = {props.document} data={props.data}/></>)
  
}else{}
    }
