import {useState} from 'react';
import { AddPassengerForm } from '../forms/AddPassengerForm';
import { UpdatePassengerForm } from '../forms/UpdatePassengerForm';

export const PassengerFormsOnClick = (props) =>{

    //let [state, setState] = useState()
    
   let state = props.state;
    console.log(props.state)


    
        if( state === undefined || state==="Add"){
          return (<><h2>Add Passenger</h2> <AddPassengerForm/> </>)
        
} else if (state==="Update") {
    return(<><h2>Update Passenger</h2> <UpdatePassengerForm id=  {props.document} /></>)
    
} else {
    
}
  

    }
