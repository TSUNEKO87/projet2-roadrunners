import React, {Component} from 'react';
import './Navbar.css';
import Logo from './logo.png'

class Navbar extends React.Component {
    render() {
        return (
            <div>
            <nav className= 'Navbar'>
                <img src={Logo} className= 'logo' />
                <h1 className= 'Navbar-logo'>Roadrunners</h1>
            </nav>
            </div>
        )
    }
}

export default Navbar;