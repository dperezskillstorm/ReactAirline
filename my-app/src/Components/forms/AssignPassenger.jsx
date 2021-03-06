import { useRef } from "react";
import "./form.css"
import axios from 'axios';




export const AssignPassenger = (props) => {
     let passengerRef = useRef();
    
     
    
    
  
    //Notes: flightNumber must be unique, all fields except currentPassenger are required

    
    const handleSubmit = async (event) => {
       // I need it to refresh else the data wont autopopulate
        //event.preventDefault();
        //const assign = {_id:documentRef.current.value, 
                     //   passengers: passengerRef.current.value}
        //const assign = {_id:"62c606a42b2b6ebaa234d449",passengers: "Robert"}
        // in order to patch to work i need to get rid of the flight number and need to include the _id number
        try {
          const data =  await axios.patch(`http://localhost:8085/flight/addPassenger/${props.document}`,{_id:props.document, passengers: passengerRef.current.value} );
            
                               
      
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
        <section>
            <form className="MyForm" onSubmit={handleSubmit} >
            <label htmlFor="idValue"> <h2>Flight Number:</h2> <h2 className="lightNumber">{props.data.flightNumber}</h2> </label>       


<label htmlFor="passengers"><br/><br/><h2>Passengers Name</h2></label>
<input name="passengers" type="text" ref={passengerRef}/>
                <input type="submit" value="Add Flight" />
               
            </form>
            </section>
        </>
    );
}