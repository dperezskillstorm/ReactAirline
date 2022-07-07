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




export const AddPassengerForm = () => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const DOBRef = useRef();
    const countryOfOriginRef = useRef(); 
    const bookingNumberRef = useRef(); 
  
   
    
    const handleSubmit = async (event) => {
       // I need it to refresh else the data wont autopopulate
        //event.preventDefault();
        try {
            await axios.post('http://localhost:8085/passenger', 
                            {   firstName: firstNameRef.current.value, 
                                lastName: lastNameRef.current.value ,
                                DOB: DOBRef.current.value,
                                countryOfOrigin: countryOfOriginRef.current.value,
                                bookingNumber: bookingNumberRef.current.value
                                });
                               
      
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
        <section>
            <form className="MyForm" onSubmit={handleSubmit} >
           
                <label  htmlFor="firstName">First Name:</label>
                
                <div>
                    <input id="firstName" type="text" placeholder="First Name" required ref={firstNameRef} />
                </div>

                <label htmlFor="lastName">Last Name :</label>
                <div>
                    <input id="lastName" type="text" placeholder="Last Name" required ref={lastNameRef} />
                </div>

                <label htmlFor="DOB"> Date of Birth:</label>
                <div>
                    <input id="DOB" type="Date" placeholder="MM/DD/YY" required ref={DOBRef} />
                </div>

                <label htmlFor="countryOfOrigin">County of Origen:</label>
                <div>
                    <input id="countryOfOrigin" type="text" placeholder="Country" required ref={countryOfOriginRef} />
                </div>

                {/**Not required yets */}

                <label htmlFor="noOfPassengers">Assigned Flight</label>
                <div>
                    <input id="noOfPassengers" type="text" placeholder="flight no." ref={bookingNumberRef} />
                </div>

             
                

                <input type="submit" value="Add Passenger" />
            </form>
            </section>
        </>
    );
}