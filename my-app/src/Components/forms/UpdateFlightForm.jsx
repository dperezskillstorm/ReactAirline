import { useRef } from "react";
import {TextField} from "@material-ui/core";
import React, { useState } from "react";
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { GetData } from '../Data/getData';
import {FlightFormsOnClick} from '../OtherFunctions/FlightFormsOnClick'
import "./form.css"

import axios from 'axios';




export const UpdateFlightForm = (props) => {

    

    const flightNumberRef = useRef();
    const departureDateRef = useRef();
    const arrivalDateRef = useRef();
    const departureAirportRef = useRef(); 
    const arrivalAirportRef = useRef(); 
    const currentPassengersRef = useRef(); 
    const passengerLimitRef = useRef(); 
    const  idNumberRef = props.document;

    console.log(`priting props in updateFlightForm ${idNumberRef}`)
    alert(idNumberRef)
    //NOTES: Update work, needs _id in order to update and to populate all fields.

    const handleSubmit = async (event) => {
       // I need it to refresh else the data wont autopopulate
        //event.preventDefault();
        try {
            await axios.patch(`http://localhost:8085/flight/${idNumberRef.current.value}`, 
                            
                            {   flightNumber: flightNumberRef.current.value, 
                                _id: idNumberRef.current.value,
                                arrivalDate: arrivalDateRef.current.value ,
                                arrivalAirport: arrivalAirportRef.current.value,
                                departureAirport: departureAirportRef.current.value,
                                departureDate: departureDateRef.current.value,
                               
                                });
                               
      
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
        <section>
            <form className="MyForm" onSubmit={handleSubmit} >
           
                <label htmlFor="flightNumber">Flight Id:</label>
                
                <div>
                    <input id="flightNumber"  value={idNumberRef}  />
                </div>

                <label htmlFor="flightNumber">Flight Number:</label>
                
                <div>
                    <input id="flightNumber" type="text" ref={flightNumberRef}  />
                </div>

                <label htmlFor="arrivalAirport">Arrival Airport:</label>
                <div>
                    <input id="arrivalAirport" type="text" placeholder="Last Name" required ref={arrivalAirportRef} />
                </div>

                <label htmlFor="arrivalDate">Arrival Date:</label>
                <div>
                    <input id="arrivalDate" type="datetime-local" placeholder="Last Name" required ref={arrivalDateRef} />
                </div>

                <label htmlFor="departureAirport">Departure Airport:</label>
                <div>
                    <input id="departureAirport" type="text" placeholder="Last Name" required ref={departureAirportRef} />
                </div>

                <label htmlFor="departureDateTime">Departure Date/Time:</label>
                <div>
                    <input id="departureDateTime" type="datetime-local" placeholder="Last Name"required ref={departureDateRef} />
                </div>

             
                

                <input type="submit" value="Add Flight" />
            </form>
            </section>
           
        </>
    );
}