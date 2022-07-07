import './App.css';
import { FlightBoardTable } from './Components/Display/Flight Display/FlightBoardTable';
import {PassengerBoardTable} from './Components/Display/Flight Display/PassengerBoardTable';
import { FlightForm } from './Components/forms/flightForm';
import { Navigation } from './Components/Display/navigation';
import {PassengerForm} from './Components/forms/NUpassengerForm';

 


function App() {
    return (
        <>
          

            <div className="App" width="700px">
                <div width="80%">
                <header className="App-header" width="100px">

                    <h1>React Airlines</h1>
                   


                </header>
                <div>
                    <Navigation />
                </div>

              <FlightBoardTable/>
               
                <section>
                    {/*<FlightForm id = "flightForm" />*/}
                    <FlightForm/>
                    

                </section>
               
                <section>
                    <PassengerBoardTable/>
             
                 
                </section>
                
                <section>
                   
               
                    </section>
                    </div>
                   
            </div>
            
        </>
            );
        
}

export default App;
