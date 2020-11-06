import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import Map from "./component/Map.js";


function App() {

  return (
    <div className="App">
            <div>
    
              <Navbar /> 
                <Switch>
                    <Route exact path='/'>
                      <Homepage />  
                    </Route>
                    <Route path='/application'>
                        <Map />
                    </Route>
                </Switch>
            </div>
    </div>
  );
}

export default App;
