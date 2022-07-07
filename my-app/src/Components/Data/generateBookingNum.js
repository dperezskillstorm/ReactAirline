export function bookingNumGenerator(lastName,departureAirport,DOB){

    let str1 = lastName.substr(0,2)
    let str2 = departureAirport.substr(0,2)
    let str3 = (DOB).substr(-1-2,)
    let bk =str1+str2+str3;
    return bk;
} 

//Auto Generate Booking Number takes in DOB, Name and Departure Airport