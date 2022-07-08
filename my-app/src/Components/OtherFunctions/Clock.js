
import React , {useEffect, useState} from "react";

export function Clock() {
    const [clockState, setClockState] = useState();
    const [dateState, setDateState] = useState();

    useEffect(()=>
    {
setInterval(()=>{
    const date = new Date();
    setClockState(date.toLocaleTimeString());

    },1000);
}, []);


useEffect(()=>
{

const date = new Date();
setDateState(date.toLocaleDateString());

}, []);


    
    return(
        <>

        <section className="MainPage" style={{fontSize:"100px"}}><div >{clockState}</div>
        <div>Date:{dateState}</div>
        </section>

        </>

    ) 
    


}