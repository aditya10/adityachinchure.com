import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

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
        </BrowserRouter>
    );
  }
}

export default App;
