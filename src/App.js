import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Palette {...seedColors[5]}/>
      </div>
    );
  }
}

export default App;
