import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Hashtagger from "./components/Hashtagger/Hashtagger";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: ""
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Homepage} exact />
        <Route path="/hashtagger" component={Hashtagger} exact/>
      </BrowserRouter>
    );
  }
}

export default App;
