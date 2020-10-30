import React, { Component } from 'react'
import Header from './component/Header'






class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <planTrip/>
          </header>
      </div>
    );

  }
  
}

export default App;
