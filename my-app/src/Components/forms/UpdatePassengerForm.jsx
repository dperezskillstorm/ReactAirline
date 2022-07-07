import { useRef } from "react";
import React, { useState } from "react";
import "./form.css"
import axios from 'axios';


//NOTES: Update work, needs _id in order to update and to populate all fields.
//UPDATE: WORKS GET ID FROM CLICK EVENT ON DISPLAY, PASSED THROUGH PROPS

export const UpdatePassengerForm = (props) => {

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const DOBRef = useRef();
    const countryOfOriginRef = useRef(); 
    const bookingNumberRef = useRef(); 
    
  
   
    
    const handleSubmit = async (event) => {
       // I need it to refresh else the data wont autopopulate
        //event.preventDefault();
        try {
            await axios.patch(`http://localhost:8085/passenger/${props.id}`, 
                            {   _id: props.id,
                                firstName: firstNameRef.current.value, 
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

            <label  htmlFor="passengerID">Passenger ID:</label>
                
                <div>
                    <input id="passengerID" type="text" placeholder="passenger ID" required value={props.id} />
                </div>
           
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


                <input type="submit" value="Update Passenger" />
            </form>
            </section>
        </>
    );
}