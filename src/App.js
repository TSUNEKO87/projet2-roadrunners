<<<<<<< HEAD
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
=======
import { Switch, Route, Link } from "react-router-dom";
import React from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Homepage from "./component/Homepage";
import RoadPage from "./component/Roadpage";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/application">
            <RoadPage />
          </Route>
        </Switch>
      </div>
>>>>>>> e26d10990e4084797117ec52a3e1bcefbb0f5f90
    </div>
  );
}

export default App;
