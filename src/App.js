import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Homepage from './component/Homepage';
import Map from "./component/Map";


function App() {

  function TestRouter () {
    return(
        <p>This is a test</p>
    )
}

  return (
    <div className="App">
            <div>
             <Map />
    
              <Navbar /> 
                <Switch>
                    <Route exact path='/'>
                      <Homepage />  
                    </Route>
                    <Route path='/application'>
                        <TestRouter />
                    </Route>
                </Switch>
            </div>
    </div>
  );
}

export default App;
