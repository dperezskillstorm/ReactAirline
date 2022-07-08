# ReactAirline

# Project:  1 MERN SKILLSTORM
# Author: David Perez
# GitHub - https://github.com/dperezskillstorm/ReactAirline


# Requirements
- Scope: This application will be an airline service. This service will be from the perspective of management. You, as the manager, can see and change everything
- Technological Requirements
    -Express.Js
            #Express is used run the server from which the the data is localhost:8085

    -React
            # running the User Interface Server localhost:3000

    -CSS/Styled-Components
            # App.css, form.css
    -Material UI
            # used Material-UI button, icons, table, and forms
    -Bootstrap

    -Mongo DB/Mongose
            # Created Schema, models and controllers with Mongoose
            # Mongo is hosting the collection of the passenger Documents, an the flights Document

- Functional Requirements
    For Flights and Passengers
    -Add ; created Add forms for both passengers and flights, on submit they are added to documents in mongodb. Add Button is located on Passenger and Flight Top-Left of Page

    -Update ; created Update forms for both passengers and flights, they are directly avaialble on Displays. Click the update button, and a form will autoload to fill out and submit, the update form will update all the fields you need, and will maintain the unique _id (document id)

    -Delete; created delete functions. Can be access directly on displays. On click they will use the document id to pass a delete request through axios.

    -View flight information; General Display Table is created to view all flights in rows

    -Informational Requirements
        The following is displayed on the tables for the flights
        *FlightNumber
        *Departure Date & Time (achieved using date/time format)
        *Arrival Date & Time (achieved using date/time format)
        *Arrival Airport
        *Departure Airport
        *Current Number of Passengers; each flight record has a list of passengers, number of passengers is found by mapping flight data and using passengers.length
        *passenger limit; is found next to number of passengers for easy view. If passengers count is equal or greater then capacity, you will not be able to book the flight.




