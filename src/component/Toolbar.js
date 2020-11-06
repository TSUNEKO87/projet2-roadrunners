import React, {Component} from 'react';
import './Toolbar.css';

class Toolbar extends React.Component {
    constructor(props){
        super(props)
        this.state={
            start:'',
            end: '',
        }

        


    }
    render() {
        return (
            <div>
            <nav className= 'toolbar'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSPbRRM8nX8B5_QDndo2eXp0OoHA1t8STh0DQ&usqp=CAU" className= 'start' />
                <img src='https://stickeramoi.com/11157-large_default/sticker-drapeau-damier.jpg' className= 'end' />
            </nav>
            </div>
        )
    }
}

export default Toolbar;