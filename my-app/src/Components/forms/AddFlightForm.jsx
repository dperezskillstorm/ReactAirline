import { useRef } from "react";
import {TextField} from "@material-ui/core";
import React, { useState } from "react";
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { GetData } from '../Data/getData';
import "./form.css"

import axios from 'axios';


//NOTEs: WORKS WELL NO PROBLEM


export const AddFlightForm = () => {

    const flightNumberRef = useRef();
    const departureDateRef = useRef();
    const arrivalDateRef = useRef();
    const departureAirportRef = useRef(); 
    const arrivalAirportRef = useRef(); 
    const currentPassengersRef = useRef(); 
    const passengerLimitRef = useRef(); 
  
    //Notes: flightNumber must be unique, all fields except currentPassenger are required

    
    const handleSubmit = async (event) => {
       // I need it to refresh else the data wont autopopulate
        //event.preventDefault();
        try {
            await axios.post('http://localhost:8085/flight', 
                            {   flightNumber: flightNumberRef.current.value, 
                                departureDate: departureDateRef.current.value,
                                arrivalDate: arrivalDateRef.current.value ,
                                arrivalAirport: arrivalAirportRef.current.value,
                                departureAirport: departureAirportRef.current.value,
                                passengerLimit: passengerLimitRef.current.value
                                //currentPassengers: currentPassengersRef.current.value

                                });
                               
      
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
        <section>
            <form className="MyForm" onSubmit={handleSubmit} >
           
                <label htmlFor="flightNumber">Flight Number:</label>
                
                <div>
                    <input id="flightNumber" type="text" placeholder="First Name" required ref={flightNumberRef} />
                </div>

                <label htmlFor="arrivalAirport">Arrival Airport:</label>
                <div>
                    <input id="arrivalAirport" type="text" placeholder="Last Name" required ref={arrivalAirportRef} />
                </div>

                <label htmlFor="arrivalDate">Arrival Date:</label>
                <div>
                    <input id="arrivalDate" type="datetime-local"  required ref={arrivalDateRef} />
                </div>

                <label htmlFor="departureAirport">Departure Airport:</label>
                <div>
                    <input id="departureAirport" type="text" placeholder="Last Name" required ref={departureAirportRef} />
                </div>

                <label htmlFor="departureDateTime">Departure Date/Time:</label>
                <div>
                    <input id="departureDateTime" type="datetime-local" required ref={departureDateRef} />
                </div>

                <label htmlFor="passengerLimit"> Passenger Capacity</label>
                <div>
                    <input id="passengerLimit" type="number"  ref={passengerLimitRef} />
                </div>

                

             
                

                <input type="submit" value="Add Flight" />
            </form>
            </section>
        </>
    );
}