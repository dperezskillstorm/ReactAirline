import { useEffect, useState } from 'react';
import axios from 'axios';
import {FlightBoardContent, flightBoardContent} from "../Display/FlightBoardContent";

export const GetFlightData = () => {


    const [flights, setFlights] = useState([]);


    //on mount will fetch data
    useEffect(() => {
        axios.get('http://localhost:8085/flight')
            .then(res => setFlights(res.data));


    }, [])




    return (
        <div>
            {/*I need to transform flights array pulled from axios into array of jsx element*/}
            {flights.map(flight => {
                return( <> <FlightBoardContent  
                            flightNum={flight.flightNumber} 
                            _id={flight.id} 
                            departureDate={flight.departureDate} 
                            arrivalDate={flight.arrivalDate}
                                                                        
/>
                </>)
                        
            }) }
              

     
            
        
        </div>
        
        );

}
