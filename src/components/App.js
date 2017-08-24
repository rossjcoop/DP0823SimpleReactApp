import React, { Component } from 'react';
import '../styles/App.css';
import ListData, { EarthquakeList } from './earthquakelist'
import QuakeInfo, { EarthquakeInfo } from './earthquakeinfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
        <div className="my-header">Earthquakes!</div> 
        </div>      
      <QuakeInfo />
      <ListData />         
      </div>
    );
  }
}

export default App;
