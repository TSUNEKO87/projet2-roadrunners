import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import React, {Component} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

function TestRouter () {
    return(
        <p>This is a test</p>
    )
}


function Homepage(props) {
    return(
        <Router>
            <div>
                
                <Switch>
                    <Route exact path='/'>
                        <Navbar />
                        <Header />
                        <Footer />
                    </Route>
                    <Route path='/application'>
                        <TestRouter />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Homepage;