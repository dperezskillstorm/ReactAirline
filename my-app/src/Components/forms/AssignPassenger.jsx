import { useRef } from "react";
import {TextField} from "@material-ui/core";
import  { useState } from "react";
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { GetData } from '../Data/getData';
import "./form.css"

import axios from 'axios';




export const AssignPassenger = (props) => {
     let passengerRef = useRef();
    
    const documentRef = props.document;
    alert(`calling props in assign Passengers ${documentRef}`)
    
    
  
    //Notes: flightNumber must be unique, all fields except currentPassenger are required

    
    const handleSubmit = async (event) => {
       // I need it to refresh else the data wont autopopulate
        //event.preventDefault();
        //const assign = {_id:documentRef.current.value, 
                     //   passengers: passengerRef.current.value}
        //const assign = {_id:"62c606a42b2b6ebaa234d449",passengers: "Robert"}
        // in order to patch to work i need to get rid of the flight number and need to include the _id number
        try {
          const data =  await axios.patch(`http://localhost:8085/flight/addPassenger/${documentRef.current.value}`,{_id:documentRef.current.value, passengers: passengerRef.current.value} );
            alert(data)
                               
      
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
        <section>
            <form className="MyForm" onSubmit={handleSubmit} >
            <label htmlFor="idValue">         
<input name = "idValue" type="text" value={documentRef}/>
</label>

<label htmlFor="passengers">
<input name="passengers" type="text" ref={passengerRef}/>
                <input type="submit" value="Add Flight" />
                </label>
            </form>
            </section>
        </>
    );
}