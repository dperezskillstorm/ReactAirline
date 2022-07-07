import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './Components/Navbar/Navbar.js';
import HomePage from './Pages/HomePage';
import Passengers from './Pages/Passengers';
import Flights from './Pages/Flights';
import Resources from './Pages/Resources';
import {Error} from './Pages/Error'



const App = ()=> {
    return (
        <>

<div className="App">
 
<h1>React Airlines</h1>

  <Router>
    <Navbar/>
    <div id="content">
    <section>
    <Routes>
        <Route path="/"  exact element={<HomePage />}/>
        <Route path='/flights' element={<Flights/>} />
        <Route path='/passengers' element={<Passengers/>} />
        <Route path='/resources' element={<Resources/>} />
        <Route path="*" element={<Error/>} />
    </Routes>
    </section>
    </div>

  </Router>
  </div>
</>



    
                           
              
              
   
            );
        
}

export default App;
